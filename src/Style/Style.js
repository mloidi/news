import styled from 'styled-components';

export const Page = styled.div`
  opacity: ${(props) => (props.loading ? '0.2' : '1')};
`;

export const PageTitle = styled.h1`
  font-family: 'Monoton', cursive;
  margin: 0.5rem 3rem 3rem 3rem;
  padding: 1rem;
  font-size: 4rem;
  color: #ecd018;
  background-color: black;
  @media all and (max-width: 900px) {
    margin: 1rem;
    font-size: 2rem;
  }
`;

export const PageTop = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 0.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  @media all and (max-width: 900px) {
    margin-left: 1rem;
  }
`;

export const SearchArea = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-column-gap: 1rem;
  justify-items: start;
  margin-top: 1rem;
  @media all and (max-width: 900px) {
    grid-template-columns: auto;
  }
`;

export const SearchTitle = styled.div`
  font-family: 'Fredericka the Great', cursive;
  margin-left: 3rem;
  font-size: 2rem;
  color: black;
  font-weight: bold;
  @media all and (max-width: 900px) {
    margin-left: 1rem;
    font-size: 1.5em;
  }
`;

export const SearchBy = styled.input`
  font-family: 'Fredericka the Great', cursive;
  padding: 0.5rem;
  font-size: 1rem;
  border: 0;
  border-bottom: 0.1rem dashed grey;
  text-decoration: none;
  &:hover,
  &:focus {
    outline: none;
    border-bottom: 0.1rem solid #ecd018;
    &:after {
      width: calc(100% - 60px);
    }
  }
  @media all and (max-width: 900px) {
    margin-left: 1rem;
  }
`;

export const Footer = styled.footer`
  display: grid;
  justify-content: center;
`;

export const Link = styled.button`
  font-family: 'Monoton', cursive;
  font-size: 4rem;
  color: ${(props) => props.color || 'black'};
  text-decoration: none;
  border: none;
  border-bottom: 2px solid #ecd018;
  background-color: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;
  @media all and (max-width: 900px) {
    font-size: 2rem;
  }
`;
