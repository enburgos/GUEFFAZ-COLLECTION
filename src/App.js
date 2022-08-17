import "./CSS/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

<script
  src="https://kit.fontawesome.com/9aa2a871ad.js"
  crossorigin="anonymous"
></script>;

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
