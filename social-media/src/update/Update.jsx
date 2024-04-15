import { useContext, useState } from "react"
import "./Update.scss"
import { useQuery, useQueryClient,useMutation } from "@tanstack/react-query"
import axios from "axios"
import { BASE_URL } from "../config"
import { AuthContext } from "../context/authContext"

const Update = ({setOpenUpdate})=>{
    const {currentUser} = useContext(AuthContext)
    const [info, setInfo] = useState({
        name: currentUser.name,
        city: currentUser.city,
        website: currentUser.website
    })

    const handleChange = (e)=>{
        setInfo(prevInfo => ({...prevInfo, [e.target.name]: [e.target.value]}))
    }

    const queryClient = useQueryClient();
    // Update User Data

    const handleUserUpdate = async()=>{
        try{
            const res = await axios.patch(BASE_URL + '/users',info)
            console.log(res)
        }catch(e){
            console.log(e)
        }
    }

    const mutation = useMutation({
        mutationFn: handleUserUpdate,
        onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['user'] })
        },
    })


    const handleClick = (e)=>{
        e.preventDefault()
        mutation.mutate();
        setOpenUpdate(false)
    }

    return (
        <div className="update">
            <div className="wrapper">
                <h1>Update </h1>
            <form >
                <div className="file">
                    <label htmlFor="coverPic">Cover Picture</label>
                    <input type="file" name="coverPic"/>
                </div>


                <div className="file">
                    <label htmlFor="coverPic">Profile Picture</label>
                    <input type="file" name="profilePic"/>
                </div>

                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={handleChange} value={info.name}/>

                <label htmlFor="website">Website</label>
                <input type="text" name="website"onChange={handleChange} value={info.website}/>

                <label htmlFor="city">City</label>
                <input type="text" name="city"onChange={handleChange} value={info.city}/>

                <button onClick={handleClick}>Update</button>
            </form>

            <button className="close" onClick={()=>setOpenUpdate(false)}>X</button>
        </div>
    </div>

    )
}

export default Update