import { BackGround } from "./App.styles";
import Agency from "./components/Agency";
import Clients from "./components/Clients";
import Fetuses from "./components/Fetuses";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Specialization from "./components/Specialization";
import { Container } from "./style/common";

function App() {
  return (
    <>
      <BackGround>
        <Navbar />
        <Container>
          <HeroSection />
          <Specialization />
          <Agency />
          <Fetuses />
        </Container>
        <Container backgroundColor="#F8F5FF">
          <Portfolio />
        </Container>
        <Container>
          <Clients />
        </Container>
      </BackGround>
      <BackGround>
        <Container>
          <Footer/>
        </Container>
      </BackGround>
    </>
  );
}

export default App;
