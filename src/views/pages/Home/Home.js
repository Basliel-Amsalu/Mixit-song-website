import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Musics from "./sections/Musics/Musics";
import { MainBody, MainContent, FooterContainer } from "./Home.styles"; // Import your styles

function Home() {
  return (
    <MainBody>
      <Header />
      <MainContent>
        <Musics />
      </MainContent>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </MainBody>
  );
}

export default Home;
