import Post from "../post/Post"
import "./Posts.scss"

const Posts = ()=>{
    const posts = [
        {
            id: 1,
            name: "Elton",
            userId: 1,
            profilePic: 'https://images.pexels.com/photos/1139370/pexels-photo-1139370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            desc: "Funny Time with my bro James",
            img:'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 1,
            name: "Elton",
            userId: 1,
            profilePic: 'https://images.pexels.com/photos/1139370/pexels-photo-1139370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            desc: "Great time to chill with my bro Zustin besides coding. When Smoke again? ",
            img:'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
    ]

    return (
        <div className="posts">
            {posts.map(post=>{
                return (
                    <Post post={post} key={post.id}/>
                )
            })}
        </div>
    )
}

export default Posts;