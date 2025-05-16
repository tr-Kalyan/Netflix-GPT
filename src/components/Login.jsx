import Header from './Header'

const Login = () => {
    return(
        <div>
           <Header />
           <div className="absolute">
                <img className="w-screen" src="/Netflix_BG.jpg" alt="logo" />
           </div>
           <form className="text-white absolute my-36 mx-auto w-5/12 p-12 bg-black right-0 left-0">
            <h1 className="font-bold text-3xl py-4">Sign In</h1>
            <input 
                type="text" 
                placeholder="Email address" 
                className="w-full p-4 my-4 bg-gray-800" 
            />
            <input 
                type="password" 
                placeholder="Password" 
                className="w-full p-4 my-4 bg-gray-800" 
            />
            <button className="w-full p-4 my-4 bg-red-700">Sign In</button>
           </form>
        </div>
    )
}

export default Login