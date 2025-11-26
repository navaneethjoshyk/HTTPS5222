import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MultiSection from "./components/MultiSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <Hero />
        <MultiSection />
      </main>
      <Footer />
    </div>
  );
}

