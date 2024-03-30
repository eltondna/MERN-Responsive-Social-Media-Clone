import '../index.css'
const Login = ()=>{
    return (
        // Parent / Page Container
        <div class="w-screen h-screen bg-[#bec3ff] flex items-center justify-center">
            {/* Card */}
            <div class="flex w-[50%] h-[50%] min-h-200 bg-white rounded-md ">
                {/* Left */}
                <div class="w-[50%] flex-wrap: wrap;">
                    <h1 class="font-bold text-[30px]">Hello World</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ut tortor tempor venenatis. Quisque
        in vulputate felis. Fusce sit amet eros semper, venenatis risus vitae, maximus velit. Integer aliquam, mi nec
        tincidunt posuere, nunc quam fringilla orci, nec lacinia erat ligula vel tellus. Aliquam ullamcorper eros
        lectus.
                    </p>
                    <span>Don't you have an account? </span>
                    <button> Register</button>
                </div>
                {/* Right */}

                <div class="w-[50%]">
                    <h1 class="font-bold  text-[30px]">Login</h1>
                    <form>
                        <input type="" name="Username"/>
                        <input type="" name="Password"/>
                        <button>Login</button>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default Login;