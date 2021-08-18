import { BackGround } from "./App.styles";
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
        </Container>
      </BackGround>
    </>
  );
}

export default App;
