import styles from './Banner.module.css'
import minhaFoto from 'assents/mimhafoto.png'
import Menu from 'componentes/Menu'
 
export default function Banner(){
    return( 
            <div className={styles.imagens}>
                <img src={minhaFoto} alt="Minha Foto" className={styles.imagem} />

                <Menu className='menu' />
            </div>
        )   
}