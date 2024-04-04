import './login.scss'
import { Link } from 'react-router-dom';
const Login = ()=>{
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
                        <input class='' placeholder='Username' type="text" name="Username"/>
                        <input class='' placeholder='Password' type="password" name="Password"/>
                        <button>Login</button>
                    </form>

                </div>

            </div>
        </div>
    )
}
export default Login;