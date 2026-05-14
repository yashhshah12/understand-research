'use client'
import styles from '../app/results/results.module.css'
import { useRouter, useSearchParams } from 'next/navigation';
import {PaginationArray} from '@/types';

export const Pagination = ({paginationArray} : PaginationArray)=>{
const searchParams = useSearchParams();
const router = useRouter()
async function handlepagination(selectNumber : number) {
const initialquery = searchParams.get('q') || 'Biology'
router.push(`/results?q=${encodeURIComponent(initialquery)}&page=${selectNumber}`)
    
}

    return(
        <>
           <ul className={styles.paginationList}>
                <button>
                Previous
                </button>
             {paginationArray.length > 0 && paginationArray.map((paginationNumber : number)=>
                <li onClick={()=> handlepagination(paginationNumber)} key={paginationNumber}>{paginationNumber}</li>
            )}
                <button>
                    Next
                </button>
                </ul>
        
        
        </>
    )
}