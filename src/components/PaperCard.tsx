import styles from '../app/results/results.module.css'
import {PaperResponse} from '../types/index'
import Link from 'next/link'
const PaperCard  = async ({resultData} : any)=>{
const paperData = await resultData

    return( 
        <>
        {
         paperData.map((paper : any)=> (
                       <div className={styles.card} key={paper.paperId}>
                              <Link className={styles.linkCard} href={`/paper/${paper.paperId}`}
                        >
                        <div className={styles.cardHeader}>
                            <div className={styles.headerBadge}>
                            <span className={styles.sourceBadge}>🗄️ {paper.source} </span>
                            <span className={styles.cited}>📚 Cited {paper.cited_count}</span>
                            {paper.isOpenAccess && paper.isOpenAccess === true && (
                             <span className={styles.openBadge} > 🔓   Open access</span>)}
                            </div>
                            <span className={styles.date}>  {paper.publishDate}</span>
                        </div>
                        <h2 className={styles.header}>{paper.title}</h2>
                        <p  className={styles.abstact}>{paper.abstract}</p>
                        <p className={styles.author}>{paper.author}</p>
                      
                          <button className={styles.viewBtn}>  View paper details</button>
                        </Link>
                        </div>
    )
)
        }
        </>
    )
    
}

export  {PaperCard}