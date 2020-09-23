import React, { Component } from "react";
import AppNav from "./AppNav";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Title = styled.h3`
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
`;

const Description = styled.p`
  font-size: 20px;
  margin: 30px 30px;
  justify-content: center;
`;

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <AppNav />
        <HomeContainer>
          <Title>Welcome To Expense Tracker</Title>
          <Description>
            Expense tracking is an important part of creating a budget for your
            small business. Keeping a daily record of your expenses by tracking
            receipts, invoices and other outgoing expenses improves the
            financial health of your budget. Tracking expenses can help you stay
            on top of your cash flow and prepare you for tax season.
          </Description>
          <ImageContainer>
            <img
              style={{
                objectFit: "contain",
                width: "200px",
              }}
              src="https://whistlervalleybusiness.com/wp-content/uploads/2019/03/Valley-Business-Centre_Mar-23_2019.jpg"
              alt=""
            />

            <img
              style={{
                objectFit: "contain",
                width: "400px",
              }}
              src="https://play-lh.googleusercontent.com/0jJRcQh22fG5J3GAbvQBMYctgbV0roetUaeGRWhBWlXDjD18Byq9QdG6yjIcF1F10FE"
              alt=""
            />
          </ImageContainer>
        </HomeContainer>
      </div>
    );
  }
}

export default Home;
