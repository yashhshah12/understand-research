import Link from 'next/link'
const AuthLinks  = ()=>{



    return (
        <>
        <div className='flex justify-end gap-3 pt-3 max-w-[80rem]  max-[800]:mr-3 '>
        <Link href={`/login`} className='no-underline p-2 hover:bg-[oklch(48.8%_0.243_264.376)] hover:text-white rounded-[10px] active:translate-y-0.5 transition-all duration-300 ease-in-ou  '>
        Log In
        </Link>
        <Link href={'/signup'} className='no-underline p-2 bg-[#2563eb] rounded-[10px] text-white hover:bg-[oklch(48.8%_0.243_264.376)] active:translate-y-0.5 transition-all duration-300 ease-in-ou'>
            Sign Up         
       </Link>
        </div>

    
    
        </>
    )
}
export {AuthLinks}