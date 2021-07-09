import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-image: linear-gradient(114deg, black, transparent);
  height: 100vh;
  position: relative;
  font-family: " Noto Serif ";
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  color: #333;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin: 0.5rem 0;
  background: #000;
  color: #fff;
  padding: 0.5rem;
  font-size: 2rem;
`;

export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #000;
  padding: 0.5rem 0;
  color: #fff;
  text-decoration: none;
`;
