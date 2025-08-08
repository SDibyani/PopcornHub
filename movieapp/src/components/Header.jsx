import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Header(props) {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="logo">
        <p>POPCORNHUB</p>
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign In"}
      </button>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  .logo p {
    color: red;
    font-size: 2rem;
    font-weight: bold;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`;

export default Header;
