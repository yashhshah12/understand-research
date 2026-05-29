'use client'

import React from 'react'
import styles from './style/skeleton.module.css'
function Skeleton() {
const fixedSize = new Array(10).fill(0);
  return (
    <>

      {/* <form className={styles.controls}>
     <input type="text" className={ `${styles.searchbox} ${styles.skeleton}`}/> 
              <button className={`${styles.skeleton}`}>
              </button>
          </form>     */}
          {fixedSize && fixedSize.map((_,index)=>{
          return  <div className={`${styles.card}`} key={index}>
              <div className={`${styles.skeleton} ${styles.section1} `}></div>
          <div className={`${styles.skeleton} ${styles.section2}`}></div>
          </div>
        
        
        })}               
     

      
    </>
  )
}
export {Skeleton}