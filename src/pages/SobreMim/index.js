import PostModelo from "componentes/PostModelo";
import styles from "./SobreMim.module.css";

function SobreMim() {
    return(
        <PostModelo
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, meu nome é Hiago. Sou um desenvolvedor web apaixonado por criar experiências digitais incríveis.
                 Tenho experiência em diversas tecnologias e estou sempre aprendendo novas habilidades para aprimorar meu trabalho. 
                 Neste portfólio, você encontrará alguns dos meus projetos mais recentes. Espero que goste do que vê!
            </h3>

            <p>Se gostar do que vê, pode entrar em contato comigo pelas redes sociais ou meu email</p>
        </PostModelo>
    );
};

export default SobreMim;