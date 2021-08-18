import { BackGround } from "./App.styles";
import Agency from "./components/Agency";
import Fetuses from "./components/Fetuses";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
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
          <Agency/>
          <Fetuses/>
        </Container>
      </BackGround>
    </>
  );
}

export default App;
