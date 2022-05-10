import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import MenuLists from "../components/MenuLists";
import Navbar from "../components/Navbar";
import Sliders from "../components/Sliders";
import { Menus } from "../data/MenuData";

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  max-width: 80%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 570px) {
    max-width: 100%;
  }
`;

const Main = () => {
  return (
    <>
      <Container>
        <Navbar />
        <MenuBar />
        <Sliders />
        <MenuLists />
      </Container>
      <Footer />
    </>
  );
};

export default Main;
