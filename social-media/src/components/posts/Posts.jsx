import { BASE_URL } from "../../config"
import Post from "../post/Post"
import "./Posts.scss"
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
const Posts = ({id})=>{
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['posts'],
        queryFn: async ()=>{
            if (typeof(id) === "number"){
                const res = await axios.post(BASE_URL + '/posts/' + id)
                console.log(res.data)
                return res.data
            }else{
                const res = await axios.post(BASE_URL + '/posts')
                console.log(res.data)
                return res.data
            }
        }
    })
 
    return (
        <div className="posts">
            { error ? "Something went wrong"
                    : isPending 
                    ? "Loading" 
                    :data.map((post)=>{
                    return ( <Post post={post} key={post.id} />)
                    })
            }
        </div>
    )
}

export default Posts;