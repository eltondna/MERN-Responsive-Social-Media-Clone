import { useContext, useState } from "react";
import "./Comments.scss";
import { AuthContext } from "../../context/authContext";
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import moment, { parseTwoDigitYear } from 'moment'
import { BASE_URL } from "../../config";
import {
    useMutation,
    useQueryClient,
  } from '@tanstack/react-query'


const Comments = ({postId})=>{
    const {currentUser} = useContext(AuthContext)
    const [comment, setComment] = useState('')

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['comments'],
        queryFn: async ()=>{
            console.log(postId)
            const res = await axios.get(BASE_URL + '/comments?postId='+postId)
            console.log(res.data)
            return res.data
        }
    })

    const queryClient = useQueryClient();
    const addComment = async () =>{
        const data = {
            desc: comment,
            postId: postId
        }
        return await axios.post(BASE_URL + '/comments',data);
    }

    // Mutations
    const mutation = useMutation({
        mutationFn: addComment,
        onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['comments'] })
        },
  })

  const handleClick = async (e)=>{
        e.preventDefault();
        console.log(comment)
        console.log(postId)
        await mutation.mutate()
        setComment('')
  }
      


    return(
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder="write a comment" 
                        onChange={(e) => setComment(e.target.value)}
                        value={comment}/>
                <button onClick={handleClick}>Send</button>
            </div>
            {
            isPending ? "Loading" :
            data.map(comment =>{
                return(
                <div className="comment">
                     <img src={comment.profilePic} alt="" />
                    <div className="info">
                       
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">{moment(comment.createDate).fromNow()}</span>
                </div>
                )
            })}
        </div>
    )
}

export default Comments;