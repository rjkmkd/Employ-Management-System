import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(email, password);
        setEmail("")
        setPassword("")
        
    }
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-lg">
        <form 
        onSubmit={(e)=>{
            submitHandler(e);
        }}
        className="flex flex-col items-center justify-center ">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            className="border-2 border-emerald-600 rounded-full px-5 py-3 text-xl  outline-none bg-transparent placeholder:text-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            className="border-2 border-emerald-600  rounded-full px-5 py-3 text-xl  outline-none bg-transparent placeholder:text-gray-400 mt-4"
          />
          <button className="border-2  rounded-full text-xl  outline-none border-none bg-emerald-600 mt-9 py-2 px-16 hover:bg-emerald-800" 
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login
