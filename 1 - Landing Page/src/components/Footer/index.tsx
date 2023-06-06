import { useTranslation } from "react-i18next";
import Logo from "../../assets/logo.svg";
import styles from "./styles.module.scss";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div>
        <img src={Logo} alt="logo" />
        <div>
          <span>‍Av. Tancredo Neves, 2227, Ed. Salvador Prime •</span>
          <span>Caminho das Árvores • Salvador • Bahia • CEP 41820‑021</span>
        </div>
      </div>

      <div>
        <strong>{t("courses")}</strong>
        <span>{t("software_development")}</span>
        <span>UX/UI Design</span>
        <span>Product Manager</span>
        <span>{t("data_analysis")}</span>
      </div>
    </footer>
  );
}

export default Footer;
