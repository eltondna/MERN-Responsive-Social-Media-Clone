import './Profile.scss'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import PinterestIcon from '@mui/icons-material/Pinterest';
import XIcon from '@mui/icons-material/X';
import PlaceIcon from '@mui/icons-material/Place';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useContext } from 'react';
import {AuthContext} from "../context/authContext"
import Posts from "../components/posts/Posts"
const Profile = ()=>{
    const {currentUser} = useContext(AuthContext)
    return (
        <div className="profile"> 
            <div className="images">
                <img src="https://images.pexels.com/photos/1250346/pexels-photo-1250346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="" className="cover" />
                <img src={currentUser.profilePic} alt="" className="profilePic" />
            </div>

            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href='www.facebook.com'>
                            <FacebookOutlinedIcon fontSize='large'/>
                        </a>
                        <a href='www.instagram.com'>
                            <InstagramIcon fontSize='large'/>
                        </a>
                        <a href='www.x.com'>
                            <XIcon fontSize='large'/>
                        </a>
                        <a href='www.linkedin.com'>
                            <LinkedInIcon fontSize='large'/>
                        </a>
                        <a href='www.pinterest.com'>
                            <PinterestIcon fontSize='large'/>
                        </a>

                    </div>
                    <div className="center">
                        <span>Elton Wong</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                <span>USA</span>
                            </div>
                            <div className="item">
                                <LanguageIcon />
                                <span>elton.com</span>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>

                    <div className="right">
                        <EmailOutlinedIcon/>
                        <MoreVertIcon/>
                    </div>
                </div>
                <Posts/>
            </div>
        </div>
    )
}
export default Profile;