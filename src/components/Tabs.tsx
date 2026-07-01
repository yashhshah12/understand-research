'use client'
import {Library , Clock , Bookmark, Beaker} from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link'
import { act, use, useState } from 'react'
const Tabs = () =>{
const searchParams = useSearchParams();
const query = searchParams.get('q') || 'biology'
const tabs = searchParams.get('tabs') || 'All'
const showAuthlinks = process.env.NEXT_PUBLIC_SHOW_AUTH === 'true';

const [activeTab , setactive]  = useState(tabs);

    return(

        <div className="flex gap-x-5 mb-5">
        <Link className={`border rounded-[10px] !no-underline px-3 py-1 flex gap-0.5 items-center 
        ${activeTab === 'All' ? 'bg-blue-50 text-blue-700' :'bg-transparent text-gray-500'}`} 
        onClick={()=> setactive("All")} 
        href={`results?q=${encodeURIComponent(query)}&tabs=All ` } >
                <Library size={17} className=''/>
                    All
               
                </Link>
                 <Link  href={`results?q=${encodeURIComponent(query)}&tabs=arXiv` } 
                 onClick={()=> setactive("arXiv")}   className= {`border rounded-[10px] px-3 py-1  !no-underline flex gap-0.5 items-center ${activeTab === 'arXiv' ? 'bg-blue-50 text-blue-700' :'bg-transparent text-gray-500' }`} >
                <Beaker size={17} className=''/>
                arXiv    
        </Link>
        {showAuthlinks && (
         <Link href={''} onClick={()=> setactive("Saved")}   className= {`border rounded-[10px] px-3 py-1  !no-underline flex gap-0.5 items-center ${activeTab === 'Saved' ? 'bg-blue-50 text-blue-700' :'bg-transparent text-gray-500' }`} >
            <Bookmark size={17} />
                Saved
        </Link>
        )}
      
        </div>
    )
}
export {Tabs}

// bg-blue-50 text-blue-700 px-3 