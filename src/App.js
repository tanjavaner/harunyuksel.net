import "./App.css";
import { IntlProvider } from "react-intl";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import enMessages from "./locales/en.json";
import trMessages from "./locales/tr.json";
import Layout from "./layout/Layout";

export const pages = {
  home: { path: "/home", element: <div>Home</div> },
  about: { path: "/about", element: <div>About</div> },
  contact: { path: "/contact", element: <div>Contact</div> }
}

function App() {

  const locale = "tr";
  const messages = {
    en: enMessages,
    tr: trMessages,
  };

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale] || messages.tr}
      defaultLocale="tr"
    >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={pages.home.path} element={pages.home.element} />
            <Route path={pages.about.path} element={pages.about.element} />
            <Route path={pages.contact.path} element={pages.contact.element} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;