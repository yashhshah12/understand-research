'use client';
import { useRouter } from 'next/navigation';
 import styles from './paper.module.css';


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
    onClick={handleclick}  className= {styles.backbutton}
  >
        {mode == 'closeTab' ? 'Close Tab & Return' : '← Back to Results'}
    </button>

        </>

    )
}
export default BackButton;