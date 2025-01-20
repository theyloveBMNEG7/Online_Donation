
const ResetPassword = () => {
    return (
      <div className="flex items-center justify-center h-screen ">
          <div className="bg-black border border-slate-800 rounded-md p-20 shadow-2xl bg-opacity-85 relative" >
           <h1 className="text-4xl font-bold text-center ml-8 mb-8 text-white z-10">Reset Password</h1>
            <form action="">

              <div className="mb-4">
                <div>
                    <label className="block text-white">Password:</label>
                </div>

                <input 
                type="Password" 
                className="w-full p-2 text-black border border-gray-300 rounded" 
                placeholder="*********" 
                required />
              </div>

              <div>
                <label className="block text-white">Confirm Password:</label>
            </div>

              <input 
              type="Password" 
              className="w-full p-2 text-black border border-gray-300 rounded" 
              placeholder="*********" 
              required />

              <div className="flex justify-center pt-7">
              <button 
              type="submit" 
              className="w-60 flex bg-blue-900 text-white justify-center p-2 rounded-full hover:scale-105 hover:bg-blue-800 hover:text-white hover:shadow-lg">Submit</button>
              </div>
              <br></br>
              <div>
                <span className="mt-2 text-center"> Remember Password? <a href='Login' className="text-blue-600 hover:underline"> Login Here!!</a></span>
              </div>
            </form>
          </div>
      </div>
    )
  }
  
  export default ResetPassword