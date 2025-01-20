
const ForgotPassword = () => {
    return (
      <div className="flex items-center justify-center h-screen ">
          <div className="bg-black border border-slate-800 rounded-md p-20 shadow-2xl bg-opacity-85 relative" >
              <h2 className="text-4xl font-bold text-center mb-6 text-white z-10">Forgot Password</h2>
            <form action="">
                
              <div className="mb-4">
                <div>
                    <label className="block text-white">Email:</label>
                </div>
                <input type="email"
                 className="w-full p-2 border border-gray-300 rounded" 
                 placeholder="you@example" 
                 required />
              </div>
              <div className="flex justify-center pt-3">
              <button type="submit"
               className="w-60 flex bg-blue-900 text-white justify-center p-3 rounded-full hover:scale-105 hover:bg-blue-800 hover:text-white hover:shadow-lg">
                <a href="ResetPassword">Reset Password</a></button>
              </div>
              <br></br>
              <div>
                <span className="mt-2 text-center"> Remember Password? <a href='Signup' className="text-blue-600 hover:underline"> Login Here!!</a></span>
              </div>
            </form>
          </div>
      </div>
    )
  }
  
  export default ForgotPassword