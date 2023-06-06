import { useTranslation } from "react-i18next";
import CoverImage from "../../assets/cover.png";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./styles.module.scss";

function Home() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <section id="home">
        <Header />
      </section>

      <div className={styles.content}>
        <div>
          <h1>{t("study")}</h1>
          <span>{t("experience_teachers")}</span>
        </div>
        <div className={styles["content-cover"]}>
          <img src={CoverImage} alt="" />
        </div>
      </div>

      <hr className="line" />

      <section className={styles.about} id="about">
        <h1>{t("about")}</h1>

        <p>{t("about_1")}</p>
        <p>{t("about_2")}</p>
      </section>

      <hr className="line" />

      <section className={styles.video} id="methodology">
        <h1>{t("methodology")}</h1>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_z67mbQtz1s"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </section>

      <hr className="line" />

      <Footer />
    </div>
  );
}

export default Home;
