import './Post.scss'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from '@mui/material';
import Comments from '../comments/Comments';
import { useContext, useEffect, useState } from 'react';
import {useQuery, useQueryClient, useMutation} from '@tanstack/react-query'
import axios from 'axios'
import { BASE_URL } from "../../config"
import moment from "moment"
import { AuthContext } from '../../context/authContext';


const Post = ({post})=>{
    const {currentUser} = useContext(AuthContext);

    const queryClient = useQueryClient();

    const handleLikeAction = async () =>{
        const payload = {
            postId: post.id
        }
        if (data.includes(currentUser.id)){
            return await axios.post(BASE_URL + '/likes/dislike',payload); 
        }
        return await axios.post(BASE_URL + '/likes', payload);
    }
    // Mutations
    const mutation = useMutation({
        mutationFn: handleLikeAction,
        onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['likes'] })
        },
  })

  const handleClick = async ()=>{
    await mutation.mutate()
  }

    const { isPending, isError, data, error } = useQuery({
        // a specific post.id is provided for queryKey

        // Reason: sing the same query key ['likes'] for all the posts. 
        // This means that useQuery will treat all the requests as the same query 
        // and cache the result for that query key.

        // As a result, when you call useQuery multiple times with the same query key, 
        // it will return the cached data instead of making a new request.
        queryKey: ['likes', post.id],
        
        queryFn: async ()=>{
            const res = await axios.get(BASE_URL + '/likes?postId='+post.id)
            return res.data
        }
    })

    const [commentOpen,setCommentOpen] = useState(false)
    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userinfo">
                    <img src={post.profilePic} alt="" />
                        <div className="detail">
                            <Link to={`/profile/${post.userId}`} style={{textDecoration: 'none', color: 'inherit'}}>
                                <span className='name'> {post.username}</span>
                            </Link>
                            <span className='date'>{moment(post.createDate).fromNow()}</span>
                        </div>
                    </div>
                    <MoreHorizOutlinedIcon/>
                </div>

                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                        {
                            isPending ? "Loading"
                                      :data.includes(currentUser.id) 
                            ? 
                            <FavoriteOutlinedIcon style={{color: 'red'}} onClick={handleClick}/> 
                            :<FavoriteBorderOutlinedIcon onClick={handleClick}/>
                        }
                        {isPending ? "Loading" : `${data.length} Likes`}
                    </div>

                    <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon/>
                        12 Comments
                    </div>

                    <div className="item">
                        <ShareOutlinedIcon/>
                        Share
                    </div>
                </div>

                {commentOpen && <Comments postId={post.id}/>}
            </div>
        </div>
    )
}
export default Post;