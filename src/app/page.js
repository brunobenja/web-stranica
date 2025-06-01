import Image from "next/image";
import NavBar from "./components/NavBar/NavBar";
import Introduction from "./components/Introduction/Introduction";
import FeaturedWork from "./components/FeaturedWork/FeaturedWork";
import OtherWork from "./components/OtherWork/OtherWork";
import Contact from "./components/Contact/Contact";
import Banner from "./components/banner/banner";
import { ThemeProvider } from "./context/ThemeContext";
export default function Home() {
  return (
    <ThemeProvider>
      <div>
        <NavBar />
        <main>
          <section id="about">
            <Introduction />
          </section>
          <section id="banner">
            <Banner />
          </section>
          <section id="featured_work">
            <FeaturedWork />
          </section>
          <section id="other">
            <OtherWork />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}
