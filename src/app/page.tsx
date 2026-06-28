
import styles from "./page.module.css";
import {SearchBar} from '../components/SearchBar';
import { Suspense } from "react";

export default function Home() {
  return (
    <>
    <div className={styles.container}>
   <h1 className={styles.researchTitle}>Understand_research</h1> 
      <Suspense>
  
          <SearchBar />
        </Suspense>
    </div>
    </>
  );
}
