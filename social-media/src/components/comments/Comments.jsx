import { useContext } from "react";
import "./Comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = ()=>{
    const {currentUser} = useContext(AuthContext)


    const comments = [
        {
            id: 1,
            desc: "Pretty !!!!! :)",
            name: 'Elton Wong',
            profilePic:'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 2,
            desc: "Why no me lol. You guys dump me and i now staying at home with my mom doing tai chi",
            name: 'Justin Yaam',
            profilePic:"https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }

    ]
    return(
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder="write a comment"/>
                <button>Send</button>
            </div>
            {comments.map(comment =>{
                return(
                <div className="comment">
                     <img src={comment.profilePic} alt="" />
                    <div className="info">
                       
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
                )
            })}
        </div>
    )
}

export default Comments;