import "./App.css";
import { IntlProvider } from "react-intl";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import enMessages from "./locales/en.json";
import trMessages from "./locales/tr.json";
import Layout from "./layout/Layout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { FaFileContract, FaHome, FaUser } from "react-icons/fa";

export const pages = [{
  name: "home",
  path: "/home",
  icon: <FaHome className="text-2xl" />,
  element: <div>Home</div>,
},
{
  name: "about",
  path: "/about",
  icon: <FaUser className="text-2xl" />,
  element: <About />
},
{
  name: "contact",
  path: "/contact",
  icon: <FaFileContract className="text-2xl" />,
  element: <Contact />
}
]

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
        <Layout pages = {pages}>
          <Routes>
            {pages.map((page) => (
              <Route key={page.path} path={page.path} element={page.element} />
            ))}
          </Routes>
        </Layout>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;