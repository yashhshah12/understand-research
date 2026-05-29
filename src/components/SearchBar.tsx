'use client';

import { useState } from "react";
import styles from '../app/page.module.css'
import { useRouter , useSearchParams } from "next/navigation";


const SearchBar =  () =>{
const searchParams = useSearchParams();
const initialquery = searchParams.get('q') || ''
const [search , setSearch] = useState(initialquery);
const router = useRouter();
const handleSearch =  (e :React.SubmitEvent<HTMLFormElement>) =>{
e.preventDefault()
if (!search) {
    return;

}

 router.push(`results?q=${encodeURIComponent(search)}`)

}


    return (
        <form className={styles.controls} onSubmit={handleSearch}>
            <input type="text" className={styles.searchbox} placeholder="Enter research query" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">
                Search
            </button>

        </form>
        
    )

}
 export {SearchBar}