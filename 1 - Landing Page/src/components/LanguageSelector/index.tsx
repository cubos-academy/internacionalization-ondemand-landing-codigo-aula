import { useTranslation } from "react-i18next";
import BrazilLogo from "../../assets/brazil.png";
import EuaLogo from "../../assets/eua.png";
import SpainLogo from "../../assets/spain.png";
import styles from "./styles.module.scss";

function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <div className={styles.container}>
      <img
        src={SpainLogo}
        alt="Spain"
        onClick={() => i18n.changeLanguage("es")}
      />
      <img
        src={BrazilLogo}
        alt="Brazil"
        onClick={() => i18n.changeLanguage("pt")}
      />
      <img src={EuaLogo} alt="Eua" onClick={() => i18n.changeLanguage("en")} />
    </div>
  );
}

export default LanguageSelector;
