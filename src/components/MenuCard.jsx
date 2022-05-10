import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 40vh;
  background-color: #ffffff;
  box-shadow: 2px 3px 6px 0px rgb(0 0 0 / 40%);
  display: grid;
  grid-template-columns: 2fr 2.5fr;
  .imgbox {
    width: 100%;
    img {
      width: 100%;
      min-width: auto;
      position: relative;
      left: -2.5rem;
      @media only screen and (max-width: 1100px) {
        left: auto;
      }
    }
  }
  .desc-box {
    margin: 2rem 2rem 0;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      color: #e4002b;
      margin-bottom: 1rem;
    }
    p {
      line-height: 1.3;
      font-weight: normal;
      color: #666;
      font-size: large;
    }
  }
  .button {
    margin-right: -1.5rem;
    margin-bottom: 0.5rem;
    button {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.3em;
      min-width: 10rem;
      width: 100%;
      color: #ffffff;
      padding: 1.2rem 0.7rem;
      background: url("https://www.kfc.co.th/Content/OnlineOrderingImages/Shared/button-mask.png"),
        #e4002b;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 3px;
      border: none;
    }
  }
`;

const MenuCard = ({ menu }) => {
  return (
    <Container>
      <div className="imgbox">
        <img src={menu.img} alt="" />
      </div>
      <div className="desc-box">
        <div className="text-box">
          <h2>{menu.menu}</h2>
          <p>{menu.desc}</p>
        </div>
        <div className="button">
          <button>from ฿ {menu.price}</button>
        </div>
      </div>
    </Container>
  );
};

export default MenuCard;
