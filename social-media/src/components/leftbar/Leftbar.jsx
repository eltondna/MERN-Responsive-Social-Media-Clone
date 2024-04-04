import "./Leftbar.scss"
import Friends from "../../assets/1.png"
import Groups from "../../assets/2.png"
import Market from "../../assets/3.png"
import Watch from "../../assets/4.png"
import Memories from "../../assets/5.png"
import Events from "../../assets/6.png"
import Gaming from "../../assets/7.png"
import Gallery from "../../assets/8.png" 
import Videos from "../../assets/9.png"
import Messages from "../../assets/10.png"
import Tutorials from "../../assets/11.png"
import Courses from "../../assets/12.png"
import Fund from "../../assets/13.png"
const Leftbar = ()=>{
    return (
        <div className="leftbar">
            <div className="container">

                <div className="menu">

                    <div className="user">
                        <img src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span> Elton Wong</span>
                    </div>

                    <div className="item">
                        <img src={Friends} alt="" />
                        <span>Friends</span>
                    </div>

                    <div className="item">
                        <img src={Groups} alt="" />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={Market} alt="" />
                        <span>Market</span>
                    </div>
                    <div className="item">
                        <img src={Watch} alt="" />
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={Memories} alt="" />
                        <span>Memories</span>
                    </div>

                    <hr/>  

                    
                    <div className="menu">

                        <span>Your Activities</span>

                        <div className="item">
                            <img src={Events} alt="" />
                            <span>Events</span>
                        </div>
                        <div className="item">
                            <img src={Gaming} alt="" />
                            <span>Gaming</span>
                        </div>
                        <div className="item">
                            <img src={Gallery} alt="" />
                            <span>Gallery</span>
                        </div>
                        <div className="item">
                            <img src={Videos} alt="" />
                            <span>Videos</span>
                        </div>
                        <div className="item">
                            <img src={Messages} alt="" />
                            <span>Messages</span>
                        </div>

                    </div>

                    <hr/>  

                        <div className="menu">
                            <span>Others</span>

                            <div className="item">
                                <img src={Fund} alt="" />
                                <span>Fundraiser</span>
                            </div>
                            <div className="item">
                                <img src={Tutorials} alt="" />
                                <span>Tutorials</span>
                            </div>
                            <div className="item">
                                <img src={Courses} alt="" />
                                <span>Courses</span>
                            </div>

                        </div>
                </div>
            </div>
        </div>
    )
}

export default Leftbar;