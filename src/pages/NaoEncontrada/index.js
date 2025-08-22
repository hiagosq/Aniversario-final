import styles from './NaoEncontrada.module.css';

export default function NaoEncontrada() {
    return(
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>
                404
            </span>

            <h1 className={styles.titulo}>
                Ops! Página não encontrada.
            </h1>

            <p className={styles.paragrafo}>
                A página que você está procurando não existe, digite um endereço válido ou volte para a página inicial.
            </p>

            <p className={styles.paragrafo}>
                <a href='inicio'>Voltar para a página inicial</a>
            </p>

            <div className={styles.botaoContainer}>
                <button>Voltar</button>
            </div>

            <img
                className={styles.imagemCachorro}
                src="/assents/img14.jpg"
                alt="Imagem de um cachorro com cara de perdido">
            </img>

        </div>
    );
};