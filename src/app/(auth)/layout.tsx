    import React from "react"
    import BackButton from "../../components/BackButton";
    const AuthLayout = ({children}: {children :React.ReactNode})=>{


    return(
                    
                    
    <main className="min-h-dvh bg-gray-100 flex flex-col gap-5 items-center p-7 pt-10 text-[1.03rem] max-[410px]:py-5" >
        <div className="text-left w-full max-w-[38rem]">
        <BackButton/>         
        </div>
        {children}
        </main>
     
    )



    }
    export default AuthLayout