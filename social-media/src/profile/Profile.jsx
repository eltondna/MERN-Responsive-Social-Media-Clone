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
import { useContext, useState } from 'react';
import {AuthContext} from "../context/authContext"
import Posts from "../components/posts/Posts"
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query'
import { BASE_URL } from '../config';
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import Update from '../update/Update';

const Profile = ()=>{
    const {currentUser } = useContext(AuthContext)
    const [openUpdate, setOpenUpdate] = useState(false)

    const userId = parseInt(useLocation().pathname.split("/")[2])
    const queryClient = useQueryClient();

    // Fetch User Data
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['user'],
        queryFn: async ()=>{
            const res = await axios.get(BASE_URL + '/users/find/'+userId);
            // console.log(res.data)
            return res.data;
        }
    })

    // Fetch Relationship Info
    const { data: relationshipData, isPending: IsRIPending } = useQuery({
        queryKey: ['relationships'],
        queryFn: async ()=>{
            const res = await axios.get(BASE_URL + '/relationships?followedId='+userId);
            // console.log(res.data)
            return res.data;
        }
    })

    // Update Relationship State
    const handleFollowAction = async ()=>{
        const payload = {
            userId: userId
        }

        if (relationshipData.includes(currentUser.id)){
            return await axios.post(BASE_URL + '/relationships/unfollow',payload); 
        }
        return await axios.post(BASE_URL + '/relationships', payload);  
    }
    // Mutations
    const mutation = useMutation({
        mutationFn: handleFollowAction,
        onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['relationships'] })
        },
    })

    const handleClick = async ()=>{
        await mutation.mutate();
    }

    if (isPending) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="profile"> 
            <div className="images">
                <img src={data.coverPic} alt="" className="cover" />
                <img src= {data.profilePic} alt="" className="profilePic" />
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
                        <span>{data.name}</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                <span>{data.city}</span>
                            </div>
                            <div className="item">
                                <LanguageIcon />
                                <span>{data.website}</span>
                            </div>
                        </div>
                        { IsRIPending ? "Loading" 
                            :currentUser.id == userId 
                            ? <button onClick={()=>setOpenUpdate(true)}>Update</button>
                            :<button onClick={handleClick}>
                            {
                                relationshipData.includes(currentUser.id)
                                ? "Following"
                                :"Follow"
                            }    
                            </button>
                        }
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon/>
                        <MoreVertIcon/>
                    </div>
                </div>
                {/* NEED AMENDMENT TO FETCH SPECIFIC USER POSTS */}
                <Posts id={userId}/>
            </div>
            {openUpdate && <Update setOpenUpdate={setOpenUpdate}/>}
        </div>
    )
}
export default Profile;