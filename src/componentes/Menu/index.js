import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

function Menu(){
    return(
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/"> Início </MenuLink>
                <MenuLink to="/jogo"> Renovação de contrato </MenuLink>
            </nav>
        </header>

    );
};

export default Menu;