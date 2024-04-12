import { Link } from 'react-router-dom';
import './register.scss'
import { useState } from 'react';
import axios from 'axios'
import {BASE_URL} from "../config"
const Register = ()=>{
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
        email: "",
        name: "",
    })

    const [err, setErr] = useState(null);

    const handleChange = (e) =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value }))
        console.log(inputs)
    }

    const handleClick = async (e)=>{
        e.preventDefault();
        try{    
            const {data} = await axios.post(BASE_URL + "/auth/register",inputs)
            console.log(data);
        }catch (err){
            setErr(err.response.data)
            console.log(err.response.data)
        }
    }

    return (
        // Parent / Page Container
        <div class="register">
            {/* Card */}
            <div class="card">
                {/* Left */}
                <div class="left">
                <h1>Register</h1>
                    <form>
                        <input class='' placeholder='Username' type="text" name="username" onChange={handleChange}/>
                        <input class='' placeholder='Email' type="text" name="email"onChange={handleChange} />
                        <input class='' placeholder='Password' type="password" name="password" onChange={handleChange}/>
                        <input class='' placeholder='name' type="text" name="name" onChange={handleChange}/>
                        <button onClick={handleClick}>Register</button>
                        {err && err}
                    </form>
                </div>
                {/* Right */}

                <div class="right">
                    <h1 >Connect With People</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ut tortor tempor venenatis. Quisque
                    in vulputate felis.
                    </p>
                    <Link to="/login">
                        <button> Login</button>
                    </Link>
                </div>
            </div>
        </div>
        
    )
}
export default Register;