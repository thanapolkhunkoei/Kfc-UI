import React from "react";
import styled from "styled-components";
import bucket from "../assets/bucket.png";

const Container = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0 1rem;

  .left-box {
    display: flex;
    min-width: 21.3rem;
    max-width: 21.3rem;
    ul {
      display: flex;
      list-style: none;
      font-weight: bold;
      font-size: large;
      padding: 0.3rem 0 0.3rem;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
      li {
        padding-right: 0.7rem;
        padding-left: 0.7rem;
      }
      .promo {
        border-right: 1px solid black;
      }
      .combo {
        border-right: 1px solid black;
      }
    }
  }
  .right-box {
    width: 60rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 1rem;
    @media only screen and (max-width: 1100px) {
      grid-template-columns: auto;
    }
    @media only screen and (max-width: 640px) {
      display: none;
    }
    button {
      background: url("https://www.kfc.co.th/Content/OnlineOrderingImages/Shared/button-mask.png"),
        #e4002b;
      background-size: contain;
      padding: 0.85em;
      font-size: 1em;
      font-weight: bold;
      text-transform: uppercase;
      color: white;
      border: none;
      border-radius: 3px;
      box-shadow: none;
      margin-right: 1rem;
      @media only screen and (max-width: 870px) {
        display: none;
      }
    }
    img {
      margin-right: 1rem;
    }
    p {
      color: #2d2926;
      text-decoration: none;
      font-weight: bold;
      transition: color 300ms ease-out;
      cursor: pointer;
      font-size: 1.6em;
      margin-right: 1rem;
    }
  }
`;

const Button = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 1rem;
  @media only screen and (min-width: 871px) {
    display: none;
  }
  button {
    width: 100%;
    background: url("https://www.kfc.co.th/Content/OnlineOrderingImages/Shared/button-mask.png"),
      #e4002b;
    background-size: contain;
    padding: 0.85em;
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
    color: white;
    border: none;
    border-radius: 3px;
    box-shadow: none;
  }
`;

const MenuBar = () => {
  return (
    <>
      <Container>
        <div className="left-box">
          <ul className="menu">
            <li className="promo">Promotions</li>
            <li className="combo">Combos</li>
            <li className="last-box">A la carte</li>
          </ul>
        </div>
        <div className="right-box">
          <button>start my order</button>
          <img src={bucket} alt="" />
          <p>฿ 0.00</p>
        </div>
      </Container>
      <Button>
        <button>start my order</button>
      </Button>
    </>
  );
};

export default MenuBar;
