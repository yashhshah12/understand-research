import React from 'react'
import styles from './style/skeleton.module.css'
function SearchSkeleton() {
  return (
    <>
     <form className={styles.controls}>
     <input type="text" className={ `${styles.searchbox} ${styles.skeleton}`}/> 
              <button className={`${styles.skeleton}`}>
              </button>
          </form> 
  
    </>
  )
}

export default SearchSkeleton