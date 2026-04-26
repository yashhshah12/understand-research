
import Link from 'next/link';
import {fetcherData} from '../../utils/fetchers';   
export const dynamic = 'force-dynamic';
import styles from './results.module.css';

    const ResultPage  = async ({searchParams} : {
        searchParams : {q? : string}
    })=>{
        const query =  searchParams.q || 'Biology';

        const papers = await fetcherData(query);
            console.log(papers);
     
        return (
                <>
                <main className={styles.container}>
                    <div className={styles.heading}>
                <h1 className={styles.title}>
                 Results for: <span className="">"{query}"</span>
                </h1>
                <input type="text" className={styles.searchpaper}  value={query}/>
                </div>
                <div className={styles.cardList}>
                {
                    papers.map((paper)=> (
                        <div className={styles.card} key={paper.id}>
                        <div className={styles.cardHeader}>
                            <span className={styles.sourceBadge}> {paper.source}</span>
                            <span className={styles.data}>  {paper.publishDate}</span>
                        </div>
                        <h2 className={styles.header}>{paper.title}</h2>
                        <p >{paper.abstract}</p>
                        <p className={styles.author}>{paper.author}</p>
                        <Link href={`/paper/${paper.id}`}
                        >
                            View paper details
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

