import { notFound } from "next/navigation";
import {getPaperById  } from "../../../utils/fetchers";
import BackButton from "./BackButton";
import styles from './paper.module.css';

const PaperDetails  = async ({params} : {params : {id? : string}})=>{
const resolvedParam = await  params;

const paperId = resolvedParam.id;
if (!paperId) {
    return notFound();
}

const  paperDetail = await getPaperById(paperId);

if (!paperDetail) {
    return notFound();
}

return (
<>
   <main className={styles.container}>
    
    <BackButton />

       <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <span className={styles.sourceBadge}> {paperDetail.source}</span>
                            <span className={styles.date}>  {paperDetail.publishDate}</span>
                        </div>
                        <h1 className={styles.title}>{paperDetail.title}</h1>
                        
                        <p className={styles.author}>
                           By: <span className={styles.authorname}>{paperDetail.author|| "Unknown Author"} 
                            </span>
                            </p>
                            <h2 className={styles.abstract}>Abstract</h2>
                            <p className={styles    .abstractDetails}>{paperDetail.abstract}</p>
                            
                        <a 
          href={paperDetail.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition-colors shadow-sm"
        >
          Read Full PDF on Publisher Website ↗
        </a>
                        </div>


    </main>



</>

)
}
export default PaperDetails