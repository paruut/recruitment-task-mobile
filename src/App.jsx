import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-center">
      <div className="flex-1 bg-white">
      <img src="/src/assets/images/bg-nav.svg" className="absolute right-0 top-0 -z-0" alt="" />
        <Nav/>
        <Header />
        <Section />
        <Footer />
      </div>
    </div>
  );
}

export default App;
