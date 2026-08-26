import React from 'react'
import { useState } from 'react'

const Login = ({onLogin}) => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit=async(e)=>{
        e.preventDefault()

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/users/login`,
                {
                    method:'POST',
                    headers:{
                        "content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        email,
                        password
                    })

                }
            )

            const data = await response.json()

            if(!response.ok){
                alert(data.message)
                return
            }

            localStorage.setItem("token",data.token)
            onLogin()
        } catch (error) {
            console.log("Login failed:",error);
            
        }
    }
  return (
    <div className='w-full max-w-md bg-white rounded-cl shadow-lg p-6'>
       <h1 className='text-2xl font-semibold mb-6'>
            Login
       </h1>

       <form onSubmit={handleSubmit} className='space-y-4'>
        <input type="email"
            placeholder='Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className='w-full border rounded-lg px-4 py-2'
            required
        />

        <input type="password"
            placeholder='Password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className='w-full border rounded-lg px-4 py-2'
            required
        />

        <button type='submit' className='w-full bg-black text-white rounded-lg py-2 hover:opacity-90'>Login</button>
       </form>
    </div>
  )
}

export default Login
