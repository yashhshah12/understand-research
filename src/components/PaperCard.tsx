import styles from '../app/results/results.module.css'

import {Bookmark} from 'lucide-react'
import Link from 'next/link'
const PaperCard  = async ({resultData} : any)=>{
const paperData = await resultData
const showAuthlinks = process.env.NEXT_PUBLIC_SHOW_AUTH === 'true';
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
                              {showAuthlinks && (
                            <div className='flex gap-2 items-center'>
                            <span className={styles.date} >  {paper.publishDate}</span>
                            <Bookmark size={22} />
                            </div>
                              )}
                          
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