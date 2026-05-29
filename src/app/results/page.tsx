export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { Suspense } from 'react'

import {SearchBar} from '../../components/SearchBar';
import {Skeleton} from '../../components/Skeleton'
import {ResultWrapperPage} from './resultwrapper';
import SearchSkeleton from '../../components/SearchSkeleton';
import styles from './results.module.css';


    const ResultPage  = async ({searchParams} : {
        searchParams : Promise<{q? : string; page?: string} >
    })=>{
       
        const resolvePromise = await searchParams

        const query =  resolvePromise.q || 'Biology';
        const currentNumber = resolvePromise.page;
        const cleanNumber = Number(currentNumber) || 1       
        const suspenseKey = `${query} - ${currentNumber}`
       
            

        return (
                <>
                <main className={styles.container}>
                    <div className={styles.heading}>
                        <Suspense fallback = {<SearchSkeleton/>}>
                     <SearchBar/>
                     </Suspense>
                  
                </div>
                <h1 className={styles.title}>
                 Results for: <span className="">"{query}"</span>
                </h1>
                <div className={styles.cardList}>
                    
                <Suspense fallback={<Skeleton/>} key={suspenseKey} >
                <ResultWrapperPage query={query} cleanNumber={cleanNumber}/>
                </Suspense>
           
                </div>
             
                </main>
                </>
        )
    }

    export default ResultPage

