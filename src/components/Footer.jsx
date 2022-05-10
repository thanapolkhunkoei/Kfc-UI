import React from "react";
import styled from "styled-components";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Container = styled.div`
  width: 80%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  .footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #e4002b;
    @media only screen and (max-width: 600px) {
      display: none;
    }
    h3 {
      background-color: #e4002b;
      padding: 0.8rem 0.5rem;
      color: #fff;
      font-weight: 500;
      font-size: 20px;
    }
  }
  .footer2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    p {
      font-weight: bold;
      padding: 0.8rem 0.5rem;
      font-size: 18px;
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0.2rem;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
    .logo-box {
      width: 13vw;
      color: #e4002b;
      display: flex;
      justify-content: space-between;
      @media only screen and (max-width: 600px) {
        width: 100%;
        justify-content: space-evenly;
        margin-bottom: 2rem;
      }
    }
    p {
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <div className="left-box">
          <h3>Customer Service</h3>
        </div>
        <div className="right-box">
          <h3>Policies</h3>
        </div>
      </div>
      <div className="footer2">
        <div className="service">
          <p>FAQ</p>
          <p>Order Tracker</p>
          <p>Contact Us</p>
        </div>
        <div className="policies">
          <p>Terms Of Use</p>
          <p>Order Tracker</p>
        </div>
      </div>
      <div className="bottom">
        <div className="logo-box">
          <YouTubeIcon style={{ fontSize: "3rem" }} />
          <InstagramIcon style={{ fontSize: "3rem" }} />
          <FacebookIcon style={{ fontSize: "3rem" }} />
        </div>
        <p>©KFC Yum! 2022</p>
      </div>
    </Container>
  );
};

export default Footer;
