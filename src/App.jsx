import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/pages/Navigation";
import HomePage from "./components/pages/HomePage/HomePage";
import PostsPage from "./components/pages/PostsPage/PostsPage";
import InfoPage from "./components/pages/InfoPage/InfoPage";
import GithubLogo from './socials-logos/GitHubLogo'
import XLogo from "./socials-logos/XLogo";
import LinkedinLogo from "./socials-logos/LinkedinLogo";
import './App.scss';
import './styles/styles/logo.scss';
import './styles/styles/breakpoints-logo-purpose.scss'

function App() {
  return (
    <div className="App">
      <div className="logo-wrapper">
        <div className="logo-text">Flower Grove</div>
        <div className="nav-socials">
          <a href="https://x.com/robuspospolitus" target="_blank">
            <XLogo />
          </a>
          <a href="/" target="_blank">
            <LinkedinLogo />
          </a>
          <a href="https://github.com/robuspospolitus" target="_blank">
            <GithubLogo />
          </a>
        </div>
      </div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="info" element={<InfoPage />} />
          <Route path="*" element={<>404</>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
