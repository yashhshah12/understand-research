'use client';
import { useRouter } from 'next/navigation';
 import styles from './paper.module.css';


const BackButton = ()=>{
const router = useRouter();
    return (
        <>
    <button
    onClick={()=> router.back()}  className= {styles.backbutton}
  >
        ← Back to Results
    </button>

        </>

    )
}
export default BackButton;