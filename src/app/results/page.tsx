
import Link from 'next/link';
import {SearchBar} from '../../components/SearchBar';
import {fetcherData} from '../../utils/fetchers';   
export const dynamic = 'force-dynamic';
import styles from './results.module.css';


    const ResultPage  = async ({searchParams} : {
        searchParams : Promise<{q? : string}>
    })=>{
        const resolvePromise = await searchParams
        const query =  resolvePromise.q || 'Biology';
      
        const papers = await fetcherData(query);
        return (
                <>
                <main className={styles.container}>
                    <div className={styles.heading}>
                    <SearchBar/>
                </div>
                <h1 className={styles.title}>
                 Results for: <span className="">"{query}"</span>
                </h1>
                <div className={styles.cardList}>
                {
                    papers.map((paper)=> (
                        <div className={styles.card} key={paper.paperId}>
                              <Link className={styles.linkCard} href={`/paper/${paper.paperId}`}
                        >
                        <div className={styles.cardHeader}>
                            <span className={styles.sourceBadge}> {paper.source}</span>
                            <span className={styles.date}>  {paper.publishDate}</span>
                        </div>
                        <h2 className={styles.header}>{paper.title}</h2>
                        <p  className={styles.abstact}>{paper.abstract}</p>
                        <p className={styles.author}>{paper.author}</p>
                      
                          <button className={styles.viewBtn}>  View paper details</button>
                        </Link>
                        </div>
                    ))
                }
                </div>
                </main>
                </>
        )


    }

    export default ResultPage

