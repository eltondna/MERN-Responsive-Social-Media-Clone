import { useContext,useState, } from 'react';
import './login.scss'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
const Login = ()=>{

    const {login} = useContext(AuthContext);
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    })
    const [err, setErr] = useState(null);
    const navigate = useNavigate()

    const handleChange = (e)=>{
        setInputs((prev)=>({...prev, [e.target.name]: e.target.value}))
        console.log(inputs)
    }

    const handleLogin = async (e)=>{
        e.preventDefault();
        try{
            await login(inputs);
            navigate("/")
        }catch(err){
            console.log(err)
            setErr(err.response.data)
        }
    }

    return (
        // Parent / Page Container
        <div class="login">
            {/* Card */}
            <div class="card">
                {/* Left */}
                <div class="left">
                    <h1 >Hello World</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ut tortor tempor venenatis. Quisque
                    in vulputate felis.
                    </p>
                    <span>Don't you have an account? </span>
                    <Link to="/register">
                        <button> Register</button>
                    </Link>
                </div>
                {/* Right */}

                <div class="right">
                    <h1 class="">Login</h1>
                    <form>
                        <input class='' placeholder='Username' type="text" name="username" onChange={handleChange}/>
                        <input class='' placeholder='Password' type="password" name="password" onChange={handleChange} />
                        <button onClick={handleLogin}>Login</button>
                        {err && err}
                    </form>

                </div>
            </div>
        </div>
    )
}
export default Login;