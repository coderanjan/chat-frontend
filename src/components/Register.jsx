import React from 'react'
import { useState } from 'react'

const register = ({onRegister}) => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit=async (e)=>{
        e.preventDefault()

        try {
            const response= await fetch(
                `${import.meta.env.VITE_API_URL}/api/users`,
                {
                    method:'POST',
                    headers:{
                        'content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        name,
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

            alert("Registration successful")
            onRegister()
        } catch (error) {
            console.log('Registration failed:',error);
            
        }
    }
  return (
    <div className='w-full max-w-md bg-white rounded-xl shadow-lg p-6'>
      <h1 className='text-2xl font-semibold mb-6'>
        Register
      </h1>

      <form onSubmit={handleSubmit} className='space-y-4'>
        <input type="text" 
            placeholder='Name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className='w-full border rounded-lg px-4 py-2'
            required
        />

        <input type="email" 
            placeholder='Email'
            value={email}
            onChange={((e)=>setEmail(e.target.value))}
            className='w-full border rounded-lg px-4 py-2'
            required
        />

        <input type="password" 
            placeholder='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className='w-full border rounded-lg px-4 py-2'
        />

        <button type='submt' className='w-full bg-black text-white rounded-lg py-2 hover:opacity-90'>Register</button>
      </form>
    </div>
  )
}

export default register
