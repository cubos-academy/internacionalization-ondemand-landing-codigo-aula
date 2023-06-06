import { useTranslation } from "react-i18next";
import Logo from "../../assets/logo.svg";
import LanguageSelector from "../LanguageSelector";
import styles from "./styles.module.scss";

function Header() {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <img src={Logo} alt="logo" />
      <nav>
        <a href="#home">{t("home")}</a>
        <a href="#about">{t("about")}</a>
        <a href="#methodology">{t("methodology")}</a>
      </nav>
      <div>
        <LanguageSelector />
        <button>Login</button>
      </div>
    </header>
  );
}

export default Header;
