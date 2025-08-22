import styles from './PostModelo.module.css'
 
export default function PostModelo({children, titulo}){
    return(
        <article className={styles.postModeloContainer}>
 
            <h2 className={styles.titulo}>
                {titulo}
            </h2>
 
            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}
