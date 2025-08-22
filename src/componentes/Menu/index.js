import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

function Menu(){
    return(
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/"> Início </MenuLink>
                <MenuLink to="/sobremim"> Sobre nós </MenuLink>
            </nav>
        </header>

    );
};

export default Menu;