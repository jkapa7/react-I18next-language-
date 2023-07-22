import { useTranslation } from "react-i18next";

function App() {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <h1>{t("header.hello-word")}</h1>

      <button onClick={() => i18n.changeLanguage("es")}>ES</button>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
    </>
  );
}

export default App;
