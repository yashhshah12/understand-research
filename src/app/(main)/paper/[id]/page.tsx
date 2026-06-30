
import BackButton from "./BackButton";
import styles from './paper.module.css';
import {abstractDetails} from '../../../../utils/abstractDetails';
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
            publishDate : paperDetails.publication_date,
            paperSource : paperDetails.source || "OpenAlex",
            paperAuthor : paperDetails.authorships?.map((a : any) => a.author.display_name).join(', ') || "No author available ",
            paperAbstract :  abstractDetails(paperDetails.abstract_inverted_index), 
            paperLink : paperDetails?.open_access?.oa_url ||paperDetails.primary_location?.pdf_url ||  paperDetails.primary_location?.landing_page_url || paperDetails.doi || null,
            papercited: paperDetails.cited_by_count > 1000
        ? `${(paperDetails.cited_by_count/1000).toFixed(1)}k`
            : paperDetails.cited_by_count,
            isOpenAccess: paperDetails.open_access?.is_oa || null, 
    }
 
return (
<>
   <main className={styles.container}>

    <BackButton />

       <div className={styles.card}>
                           <div className={styles.cardHeader}>
                            <div className={styles.headerBadge}>
                            <span className={styles.sourceBadge}>🗄️ {paper.paperSource} </span>
                            <span className={styles.cited}>📚 Cited {paper.papercited}</span>
                            {paper.isOpenAccess && paper.isOpenAccess === true && (
                             <span className={styles.openBadge} > 🔓   Open access</span>)}
                            </div>
                            <span className={styles.date}>  {paper.publishDate}</span>
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