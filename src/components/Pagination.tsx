'use client'
import styles from '../app/results/results.module.css'
import { useRouter, useSearchParams } from 'next/navigation';
import {PaginationArray} from '@/types';
import {ChevronLeft , ChevronRight} from 'lucide-react';

export const Pagination = ({paginationArray , totalItem} : PaginationArray)=>{
const searchParams = useSearchParams();
const router = useRouter()
const currentpage = Number(searchParams.get('page')) || 1;

async function handlepagination(selectNumber : number) {
const initialquery = searchParams.get('q') || 'Biology'
router.push(`/results?q=${encodeURIComponent(initialquery)}&page=${selectNumber}`)
}


    return(
        <>
           <ul className={styles.paginationList}>
            <li>
                <button disabled={currentpage == 1} 
                onClick={()=> handlepagination(currentpage - 1)}
                className={styles.paginationButton} >
                <ChevronLeft size={15}/>
                Prev
                </button>
                </li>
             {paginationArray.length > 0 && paginationArray.map((paginationNumber : number)=>{
                const isActive = currentpage === paginationNumber
                return (
                <li key={paginationNumber}> 
                <button className={`${styles.paginationNumber} , ${isActive ? styles.isActive : ''}`} onClick={()=> handlepagination(paginationNumber)} key={paginationNumber}>{paginationNumber}</button>
                </li>
                )
             })}
            <li>
                <button disabled={currentpage >= totalItem || currentpage >= 500} 
                 onClick={()=> handlepagination(currentpage+1)}
                  className={styles.paginationButton}
                 >
                    Next
                   <ChevronRight size={15}/> 
                </button>
                </li>
                </ul>
        
        
        </>
    )
}