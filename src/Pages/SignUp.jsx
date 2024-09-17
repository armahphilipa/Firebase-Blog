import HeroBg from '../assets/background1.jpg'
import { GrGoogle } from 'react-icons/gr';
import { Link, useNavigate} from "react-router-dom";
import { useState } from 'react';


function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const navigate = useNavigate();

 
  return (
    <div className='w-full h-screen'>
      <div className='hidden md:block w-full h-screen'>
        
        <img src={ HeroBg } alt='Background' className='w-full h-full object-cover' />
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/40'></div>
        <div className='absolute top-0  flex flex-col justify-center w-full h-full'>
          <div className='flex justify-center w-full h-full p-10'>
            <form className=' bg-black/70 p-10 w-[420px]' >
            <h1 className='text-[#9391ff] text-2xl font-extrabold py-3'>Dickson Mo.</h1> 
              <h1 className='text-xl text-white font-medium'>Sign up</h1>
              <div className='py-2'>
                <label className='text-sm text-white'>Name</label>
                <input placeholder='John Doe' type='text' 
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
                 className='p-2 w-full rounded-md mt-2  border-none' />
              </div>
              <div className='py-2'>
                <label className='text-sm text-white'>Email</label>
                <input placeholder='pablo@example.com' type='email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                 className='p-2 w-full rounded-md mt-2 border-none' />
              </div>
              <div className='pt-2'>
                <label className='text-sm text-white'>Password</label>
                <input placeholder='*********' type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                 className='p-2 w-full rounded-md mt-2 border-none' />
              </div>
              <p className='pt-1 text-sm font-extralight text-white'>Must be at least 8 characters</p>
              <button className='my-2 p-2 flex justify-center  bg-[#9381ff] border border-none rounded-md w-full text-white font-medium' >Sign Up</button>
              <button className='my-2 p-2 flex justify-center bg-white border border-none rounded-md w-full font-medium' > <GrGoogle size={24} color='#4285f4' className='pr-2'/> Sign up with Google</button>
              <p className='pt-1 text-right text-sm font-extralight text-white'> Don&apos;t have an account? <Link to='/Login' ><span className='text-[#9381ff] font-semibold'>Log in</span></Link> </p>
            </form>

          </div>
        </div>
      </div>
      <h1 className='text-[#9391ff] text-center text-4xl font-extrabold py-10'>Dickson Mo.</h1> 

  <div className='flex flex-col justify-center w-full h-full'>
      <div className='flex justify-center w-full h-full p-10'>
        <form className=' p-4 w-full'  >
          <h1 className='text-xl text-black font-medium'>Log in to your account</h1>
          <p className='pt-1 pb-8 text-sm font-extralight text-gray'>Welcome back! Please enter your details</p>
          <div className='py-2'>
            <label className='text-sm text-[#466365]'>Name</label>
            <input placeholder='John Doe' type='text' 
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
            className='p-2 w-full rounded-md mt-2 border border-[#9381ff]' />
          </div>
          <div className='py-2'>
            <label className='text-sm text-[#466365]'>Email</label>
            <input placeholder='pablo@example.com' type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='p-2 w-full rounded-md mt-2 border border-[#9381ff]' />
          </div>
          <div className='pt-2'>
            <label className='text-sm text-[#466365]'>Password</label>
            <input placeholder='*********' type='password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
             className='p-2 w-full rounded-md mt-2 border border-[#9381ff]' />
          </div>
          <p className='pt-1 text-sm font-extralight text-[#466365]'>Must be at least 8 characters</p>
          <button className='my-2 p-2 flex justify-center  bg-[#9381ff] border border-[#9381ff] rounded-md w-full text-white font-medium' >Sign Up</button>
          <button className='my-2 p-2 flex justify-center bg-white border border-[#9381ff] rounded-md w-full font-medium'  > <GrGoogle size={24} color='#4285f4' className='pr-2'/> Sign up with Google</button>
          <p className='pt-1 text-right text-sm font-extralight text-[#466365]'> Already have an account? <Link to='/Login' ><span className='text-[#9381ff] font-semibold'>Log in</span></Link> </p>
        </form>

        
      </div>
    </div>
    </div>
  );
}

export default SignUp;