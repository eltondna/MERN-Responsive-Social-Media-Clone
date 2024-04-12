import "./home.scss"
import Stories from "../components/stories/Stories.jsx"
import Posts from "../components/posts/Posts.jsx"
import Shares from "../components/shares/Shares.jsx"

const Home = ()=>{
    return (
        <div className="home"> 
           <Stories/>
           <Shares/>
           <Posts/>
        </div>
    )
}
export default Home;