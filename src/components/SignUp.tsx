import Link from 'next/link';;
const SignUp = ()=>{

    return(
        <>
        <div className="border-1 rounded-2xl pt-5 px-8 z-10 font-serif max-w-md w-full bg-white shadow-md border-gray-200" >
            <div className="flex flex-col gap-3">
            <h1 className="text-3xl">Sign Up</h1>
            <h2 className="text-2xl">Welcome!</h2>
            <p className="text-2xl text-gray-500"> Please enter your details</p>    
            </div>
            <form action="submit" className="flex flex-col gap-5 mt-5 mb-20 ">
            <input type="email" placeholder="Email address"  className="py-[0.5rem] px-2 rounded-2xl text-lg border-gray-300"  />
            <input type="password" name="" id="" placeholder="Password" className="py-[0.5rem] px-2 rounded-[15px] text-lg border-gray-300"/>
            <input type="password" name="" id="" placeholder="Confirm Password" className="py-[0.5rem] px-2 rounded-[15px] text-lg border-gray-300"/>   
             <button type='submit' className='bg-[#2563eb]  text-center px-2 py-[0.5rem] rounded-2xl text-xl  border-none border-gray-300"  text-white font-sans'>Sign Up</button>
            <Link href={'login'} className='text-center text-[1.3rem] text-blue-600 max-[400]:flex flex-col no-underline' > <span> Have an account?  </span>
                
                <span> Log In </span>
          
          </Link>

            </form>

        </div>
        
 
        
        </>
    )


}
export default SignUp;