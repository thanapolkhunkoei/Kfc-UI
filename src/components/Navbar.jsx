import React from "react";
import styled from "styled-components";
import logo from "../assets/kfclogo.png";
import coupon from "../assets/coupon.png";
import envolop from "../assets/envolop.png";
import bucket from "../assets/bucket.png";
import logo2 from "../assets/kfclogo2.png";

const Container = styled.div`
  height: 95px;
  /* background-color: aqua; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  margin-top: 10px;
  margin-left: 5px;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

const Logo2 = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  @media only screen and (min-width: 1101px) {
    display: none;
  }
`;

const RightBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 0.5rem;
  .service-box {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 2.5rem;
    border-radius: 5rem;
    border: 1px solid #cac6c6;
    @media only screen and (max-width: 870px) {
      display: none;
    }
    .delivery {
      /* margin-right: 1em; */
      background-color: #e4002b;
      padding: 0.6rem 1.2rem;
      box-shadow: 3px 0px 0px 0px #bf0528;
      color: white;
      font-size: 18px;
      font-weight: bold;
      border-radius: 5rem;
    }
    .self {
      /* color: white; */
      /* background-color: #e4002b; */
      padding: 0.6rem 1.2rem;
      /* box-shadow: 3px 0px 0px 0px #bf0528; */
      border-radius: 5rem;
      font-size: 18px;
      font-weight: bold;
      border-radius: 5rem;
    }
  }
  .login-box {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .language {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding-right: 0.5rem;
      position: relative;
      /* line-height: 1%; */
      &::after {
        content: "";
        position: absolute;
        right: 0;
        width: 2px;
        height: 35%;
        background: #000;
      }

      img {
        width: 3rem;
        height: 2rem;
        margin-right: 0.5rem;
      }
      p {
        font-weight: bold;
      }
    }
    .sign-in-box {
      display: flex;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding-left: 0.5rem;
    }
    a {
      text-decoration: none;
      font-weight: bold;
      color: black;
    }
    img {
      width: 3rem;
      height: 1.8rem;
      margin-left: 0.5rem;
    }
    .circle {
      background-color: #c51530;
      color: white;
      font-weight: bold;
      padding: 3px 8px;
      border-radius: 50%;
      position: relative;
      top: -0.8rem;
      right: 15px;
    }
  }
`;

const Box = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem 1rem;

  .service-box2 {
    min-width: 252px;
    height: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 0.5rem;
    border-radius: 5rem;
    border: 1px solid #cac6c6;
    @media only screen and (min-width: 871px) {
      display: none;
      margin-right: 0;
    }
    .delivery2 {
      /* margin-right: 1em; */
      background-color: #e4002b;
      padding: 0.6rem 1.2rem;
      box-shadow: 3px 0px 0px 0px #bf0528;
      color: white;
      font-size: 18px;
      font-weight: bold;
      border-radius: 5rem;
    }
    .self2 {
      /* color: white; */
      /* background-color: #e4002b; */
      padding: 0.6rem 1.2rem;
      /* box-shadow: 3px 0px 0px 0px #bf0528; */
      border-radius: 5rem;
      font-size: 18px;
      font-weight: bold;
      border-radius: 5rem;
    }
  }
  .price {
    min-width: 7rem;
    display: flex;
    font-weight: bold;
    justify-content: flex-start;
    align-items: flex-end;
    @media only screen and (min-width: 641px) {
      display: none;
    }
    p {
    }
  }
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <Logo2>
          <img src={logo2} alt="" />
        </Logo2>
        <RightBox>
          <div className="service-box">
            <div className="delivery">Delivery</div>
            <div className="self">Self Pick-up</div>
          </div>
          <div className="login-box">
            <div className="language">
              <img src={coupon} alt="" />
              <p className="text1">ไทย</p>
            </div>
            <div className="sign-in-box">
              <a href="#" className="sign-in">
                Sign in
              </a>
              <img src={envolop} alt="" />
              <div className="circle">0</div>
            </div>
          </div>
        </RightBox>
      </Container>
      <Box>
        <div className="service-box2">
          <div className="delivery2">Delivery</div>
          <div className="self2">Self Pick-up</div>
        </div>
        <div className="price">
          <img src={bucket} alt="" />
          <p>฿ 0.00</p>
        </div>
      </Box>
    </>
  );
};

export default Navbar;
