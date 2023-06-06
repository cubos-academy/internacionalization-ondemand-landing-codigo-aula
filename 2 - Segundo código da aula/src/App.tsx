import { useTranslation, Trans } from "react-i18next";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation();
  function handleChangeLanguage(lang: string) {
    i18n.changeLanguage(lang);
  }

  const myUser = {
    name: "Daniel",
    age: 31,
  };

  return (
    <div className="App">
      <h1>{t("hello")}</h1>
      <h2>{t("my_name", { user: myUser })}</h2>
      <h3>{t("my_age", { user: myUser })}</h3>

      <h4>
        {t("intlDateTime", { val: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)) })}
      </h4>
      <h4>
        {t("intlDateTime", {
          val: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
          formatParams: {
            val: {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            },
          },
        })}
      </h4>

      <div>
        <Trans i18nKey="my_city"></Trans>
      </div>
      <div className="card">
        <button onClick={() => handleChangeLanguage("pt")}>Português</button>
        <button onClick={() => handleChangeLanguage("en")}>Inglês</button>
      </div>
      <p className="read-the-docs">{t("study_now")}</p>
    </div>
  );
}

export default App;
