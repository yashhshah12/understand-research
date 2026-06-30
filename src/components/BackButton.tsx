'use client';
import { useRouter } from 'next/navigation';



const BackButton = ({mode = 'navigate'}: {mode?: 'navigate' | 'closeTab'})=>{
const router = useRouter();
function handleclick() {
    if (mode == 'closeTab') {
        window.close()
    }else{
        router.back();
    }
}
    return (
        <>
    <button
    onClick={handleclick}  className= {"text-[#2563eb] text-sm no-underline py-1.25 px-2.5 rounded-xl border-none" }
  >
        {mode == 'closeTab' ? 'Close Tab & Return' : '← Back to Results'}
    </button>

        </>

    )
}
export default BackButton;