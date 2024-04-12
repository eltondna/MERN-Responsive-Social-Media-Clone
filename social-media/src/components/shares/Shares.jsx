import { useContext, useState } from "react"
import "./Shares.scss"
import {AuthContext }from "../../context/authContext"
import axios from "axios"

import Image from "../../assets/img.png"
import Friend from "../../assets/friend.png"
import Map from "../../assets/map.png"

import {
    useMutation,
    useQueryClient,
  } from '@tanstack/react-query'
import { BASE_URL } from "../../config";

const Shares = ()=>{
    const {currentUser} = useContext(AuthContext)

    // Need Further Database Implementation 
    const [file, setFile] = useState(null);
    const [desc, setDesc] = useState('')


    const queryClient = useQueryClient();
    const addpost = async () =>{
        const data = {
            desc: desc
        }
        return await axios.post(BASE_URL + '/posts',data);
    }

    // Mutations
    const mutation = useMutation({
        mutationFn: addpost,
        onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['posts'] })
        },
  })
      
    const handleClick = async (e)=>{
        e.preventDefault();
        console.log(file)
        console.log(desc)
        await mutation.mutate()
        setFile("")
        setDesc("")
    }

    return(
        <div className="share">
            <div className="container">
                <div className="comments">
                    <div className="left">

                        <img src={currentUser.profilePic} alt="" />
                        <input 
                        placeholder= {` What's on your mind? ${currentUser.name} `}
                        onChange={e=> setDesc(e.target.value)}
                        value={desc}/>
                    </div>
                    <div className="right">
                        { file && <img className="file" alt="" src={URL.createObjectURL(file)} /> }

                    </div>
                
                </div>

                <hr />

                <div className="info">
                    <div className="left">
                        <input type="file" id="file" 
                                style={{display:"none"}}
                                value={file}
                                onChange={e=> setFile(e.target.files[0])}
                        />
                        <label htmlFor="file">
                            <div className="item">
                                <img src={Image} />
                                <span>Add Image </span>
                            </div>
                        </label>

                        <div className="item">
                            <img src={Map} />
                            <span>Add Place</span>
                        </div>

                        <div className="item">
                            <img src={Friend} />
                            <span>Tag Friends</span>
                        </div>

                    </div>
                    <div className="right">
                        <div className="item">
                            <button onClick={handleClick}>Share</button>
                        </div>
                    </div>
                   
                </div>

            </div>

        </div>
    )
}

export default Shares;