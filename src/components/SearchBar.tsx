'use client';

import { useState } from "react";
import styles from '../app/page.module.css'
import { useRouter } from "next/navigation";

const SearchBar = () =>{
const [search , setSearch] = useState('');
const router = useRouter();
const handleSearch = (e :React.SubmitEvent<HTMLFormElement>) =>{
e.preventDefault()
if (!search) {
    return;

}
 router.push(`results?q=${encodeURIComponent(search)}`)

}


    return (
        <form className={styles.controls} onClick={handleSearch}>
            <input type="text" placeholder="Enter research query" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">
                submit
            </button>

        </form>
        
    )

}
 export {SearchBar}