import './register.scss'
const Register = ()=>{
    return (
        // Parent / Page Container
        <div class="register">
            {/* Card */}
            <div class="card">
                {/* Left */}
                <div class="left">
                <h1>Register</h1>
                    <form>
                        <input class='' placeholder='Username' type="text" name="Username"/>
                        <input class='' placeholder='Email' type="text" name="email"/>
                        <input class='' placeholder='Password' type="password" name="Password"/>
                        <input class='' placeholder='Password' type="text" name="name"/>
                        <button>Register</button>
                    </form>
                </div>
                {/* Right */}

                <div class="right">
                    <h1 >Connect With People</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ut tortor tempor venenatis. Quisque
                    in vulputate felis.
                    </p>
                    <button> Login</button>
                </div>
            </div>
        </div>
        
    )
}
export default Register;