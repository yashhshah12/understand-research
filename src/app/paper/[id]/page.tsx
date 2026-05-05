import { notFound } from "next/navigation";
import {getPaperById  } from "../../../utils/fetchers";
import BackButton from "./BackButton";
import styles from './paper.module.css';
import Link from "next/link";

const PaperDetails  = async ({params} : {params : {id? : string}})=>{
const resolvedParam = await  params;

const paperId = resolvedParam.id;


if (!paperId) {
     return (
        <div className={styles.errorMess}>
           <h1>!Something went wrong</h1>
           <p>We couldn't load this specific paper.</p>
        <BackButton mode="closeTab"/>
        </div>
    )    
}

try {
    const response =  await fetch(`https://api.openalex.org/works/${paperId}`)
    if (!response.ok) {
        return(
            <div className={styles.errorMess}>
                <h1>No paper found</h1>
              <BackButton mode="closeTab"/>
            </div>
        )
    }
    const paperDetails = await response.json();
    const paper = {
       
            paperId : paperDetails.id,
            paperTitle : paperDetails.title,
            paperPublicationYear : paperDetails.publication_date,
            paperSource : paperDetails.source || "OpenAlex",
            paperAuthor : paperDetails.authorships?.map((a : any) => a.author.display_name).join(', ') || "No author available ",
            paperAbstract : paperDetails.abstract || "No abstract available",
            paperLink : paperDetails.doi || null,
            
    }
    console.log(paper.paperLink);
    
return (
<>
   <main className={styles.container}>

    <BackButton />

       <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <span className={styles.sourceBadge}> {paper.paperSource}</span>
                            <span className={styles.date}>  {paper.paperPublicationYear}</span>
                        </div>
                        <h1 className={styles.title}>{paper.paperTitle}</h1>
                        
                        <p className={styles.author}>
                           By: <span className={styles.authorname}>{paper.paperAuthor} 
                            </span>
                            </p>
                            <h2 className={styles.abstract}>Abstract</h2>
                            <p className={styles.abstractDetails}>{paper.paperAbstract}</p>
                     {paper.paperLink && paper.paperLink.startsWith('http') ?  (
                                      <a 
          href={paper.paperLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.link}
        
        >
          Read Full PDF on Publisher Website ↗
        </a>)
            : 
            (<button className={styles.diabledButton} disabled>No paper available at this link</button>
            )
                     }       
          
    </div>


    </main>



</>

)
} catch (error) {
    console.log(error , "This is error message");
    return (
        <div className={styles.errorMess}>
           <h1>!Something went wrong</h1>
           <p>We couldn't load this specific paper.</p>
        <BackButton mode="closeTab"/>
        </div>
    )    
}

}
export default PaperDetails