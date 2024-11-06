import React, { useState } from 'react'
import InputComponent from '../components/InputComponent'
import { app } from '../Config/Firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const {VITE_ADMIN_KEY} = import.meta.env
function Login() {

    const logos ={
        email :<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=' size-5 fill-gray-800'><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>,
        password : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className=' size-5 fill-gray-800'><path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"/></svg>
    }
    const [message,setMessage] = useState(null)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [loading,setLoading] = useState(false)
    const auth = getAuth(app);
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault();
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            setMessage({success:true,message:"Logged In successfully"});
            if(userCredential.user.uid === VITE_ADMIN_KEY){
                console.log("hello my admin")
            }
           
            setTimeout(() => {
                navigate("/ModernGvibes/gvibesAdminPanel")
            }, 1000);
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.error(errorMessage)
            setMessage({success:false,message:errorMessage});
          }).finally(()=>{
            setLoading(false);
          })
        
    }

  return (
    <section className='h-[calc(100vh_-_4rem)]  flex items-center justify-center p-5'>
        <form className='w-full max-w-[400px]' onSubmit={handleSubmit}>
          <h1 className='text-4xl font-gelasio capitalize text-center mb-12 text-white'>welcome back</h1>
          {message && message.message ? (<p className={`mb-2 p-5 text-white ${message.success ? " bg-green-900":" bg-red-900"}`}>{message.message}</p>) : ""}
          <InputComponent type={"email"} id={"email"} placeholder={"Email"} name={"email"} value={email} setData={setEmail} icon ={logos.email} />
          <InputComponent type={"password"} id={"password"} placeholder={"Password"} name={"password"} value={password} setData={setPassword} icon ={logos.password} />
          <button type='submit' className='bg-white hover:bg-white/60 transition-all duration-300 active:scale-95 text-main block mx-auto px-8 py-2 mt-12 rounded-sm' disabled={loading} style={{cursor:loading ? "not-allowed" :"pointer"}}>{loading ? "Loading..." :"Login"}</button>
        </form>
    </section>
  )
}

export default Login