import styles  from "./style/error.module.css";
const NotFound = ()=>{

    return (
        <>
        <h2 className={styles.error}>We couldn't find any results.</h2>
        <p className={styles.des}>Please try searching for something else.</p>
    
    </>
    )
}
export {NotFound}