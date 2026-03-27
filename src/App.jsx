import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/pages/Navigation";
import HomePage from "./components/pages/HomePage/HomePage";
import PostsPage from "./components/pages/PostsPage/PostsPage";
import InfoPage from "./components/pages/InfoPage/InfoPage";
import PrivacyPolicyPage from "./components/pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./components/pages/TermsAndConditionsPage";
import './App.scss';
import './styles/styles/logo.scss';
import './styles/styles/breakpoints-logo-purpose.scss'

function App() {
  return (
    <div className="App">
      <div className="logo-wrapper">
        <div className="logo-text">Flower Grove</div>
        <div className="socials">
          <a href="/" target="blank">
            <div className="social"/>
          </a>
          <a href="/" target="blank">
            <div className="social"/>
          </a>
          <a href="/" target="blank">
            <div className="social"/>
          </a>
        </div>
      </div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="info" element={<InfoPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="*" element={<>404</>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
