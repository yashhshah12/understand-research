import Link from 'next/link';;
const LoginPage = ()=>{

    return(
        <>
        <div className="border-1 rounded-2xl pt-5 px-8 z-10 font-serif max-w-md w-full bg-white shadow-md border-gray-200" >
            <div className="flex flex-col gap-3">
            <h1 className="text-3xl">Login page</h1>
            <h2 className="text-2xl">Welcome back</h2>
            <p className="text-2xl text-gray-500"> Please enter your details</p>    
            </div>
            <form action="" className="flex flex-col gap-5 mt-5 mb-20 ">
            <input type="email" placeholder="Email address"  className="py-3 px-2 rounded-2xl text-lg border-gray-300"  />
            <input type="password" name="" id="" placeholder="Password" className="py-3 px-2 rounded-[15px] text-lg border-gray-300"/>
           <Link href={''} className='text-right text-xl text-blue-600 no-underline' >
            Forget password
           
           </Link>
                <button type='submit' className='bg-[#2563eb]  text-center px-2 py-3 rounded-2xl text-xl  border-none border-gray-300"  text-white font-sans'>Log In</button>
            
            <Link href={''} className='text-center text-[1.3rem] text-blue-600 max-[400]:flex flex-col no-underline' > <span>Don't have an account?  </span>
                
                <span> Sign up </span>
          
          </Link>

            </form>

        </div>
        
 
        
        </>
    )


}
export default LoginPage;