
const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
    <div className="bg-black border border-slate-800 rounded-md p-20 shadow-2xl bg-opacity-85 relative" >
      <h1 className="text-4xl font-bold text-center mb-6 text-white z-10">Login</h1>
      <form action="">

        <div className="mb-4">
          <div>
            <label className="block text-white">Email:</label>
          </div>
          <input 
          type="email" 
          className="w-full p-2  text-white border border-gray-300 rounded" 
          placeholder="you@example" 
          required />
        </div>

        <div className="mb-4">
          <div>
            <label className="block text-white">Password:</label>
          </div>
          <input 
          type="Password" 
          className="w-full p-2 text-white border border-gray-300 rounded" 
          placeholder="*********" 
          required />
        </div>

        <p className="mt-4 ">
          <span> 
            <a href="/ForgotPassword" className="text-blue-600 hover:underline">Forgot Password?</a>
            </span>
        </p>
        <div className="flex justify-center pt-3">
        <button 
        type="submit" 
        className="w-60 flex bg-blue-900 text-white justify-center p-3 rounded-full hover:scale-105 hover:bg-blue-800 hover:text-white hover:shadow-lg">Login
        </button>
        </div>

      </form>
      <br></br>
        <p>
          <span className="mt-2 text-center"> Dont have an Account? 
            <a href='Signup' className="text-blue-600 hover:underline"> Create an Account Now!!</a></span>
        </p>
    </div>
  </div>
  )
}

export default Login