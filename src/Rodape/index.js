import styles from './Rodape.module.css';
import {ReactComponent as MarcaRegistrada} from 'assents/marca_registrada.svg';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada/>
            Desenvolvido no Curso de Desenvolvimento de Sistemas do Sesi/Senai
        </footer>
    );
}
