import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
  background-color: #f5f5f5;
  border-radius: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: 2rem auto;
  text-align: center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #0070f3;
  }

  h1 {
    font-size: 1.5rem;
    color: #333;
  }

  a {
    margin-top: 0.5rem;
    color: #0070f3;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 2.5rem;
    height: 2.5rem;
    color: #e11d48; /* cor do ícone */
  }
`;