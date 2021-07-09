import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  background-image: linear-gradient(66deg, white, transparent);
  font-family: " Noto Serif ";
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 7rem;
  color: #333;
  margin-bottom: 0;
`;

export const SubTitle = styled.h4`
  text-align: center;
  color: #333;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 50px;
  font-size: 4rem;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 4.5rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem 0 0 0.25rem;
  font-family: " Noto Serif ";
  font-size: 3rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  height: 4.6rem;
  border: 1px solid #000;
  padding: 0 0.5rem;
  background: #000;
  color: #fff;
  border-radius: 0 0.25rem 0.25rem 0;
  font-family: " Noto Serif ";
  font-size: 2.8rem;
  padding-left: 20px;
  padding-right: 20px;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const ErrorMsg = styled.span`
  display: block;
  font-size: 1rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
`;
