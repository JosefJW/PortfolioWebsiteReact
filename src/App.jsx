import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Header from "./components/Header";

function Layout({ children }) {
  const location = useLocation();
  const hideHeaderOn = ["/"]; // hide header on Home
  return (
    <div>
      {!hideHeaderOn.includes(location.pathname) && <Header />}
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
