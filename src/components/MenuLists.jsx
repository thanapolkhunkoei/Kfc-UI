import React, { useState } from "react";
import styled from "styled-components";
import { Menus } from "../data/MenuData";
import MenuCard from "./MenuCard";

const Container = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: auto auto;
  gap: 2.5rem;
  padding: 2rem;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: auto;
  }
`;

const MenuLists = () => {
  return (
    <Container>
      {Menus.map((menu, id) => {
        return <MenuCard key={id} menu={menu} />;
      })}
    </Container>
  );
};

export default MenuLists;
