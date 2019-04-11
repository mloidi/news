import styled from 'styled-components';

export const Page = styled.div`
  opacity: ${props => (props.loading ? '0.2' : '1')};
`;

export const NewsContainer = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  align-content: start;
  justify-content: space-around;
  grid-column-gap: 1rem;
  margin: 4rem;
  @media all and (max-width: 900px) {
    grid-template-columns: 100%;
    margin: 1rem;
  }
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

export const CountrySelector = styled.div`
  font-size: 1.3rem;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 1rem;
  align-content: start;
`;

export const Flag = styled.img`
  border: ${props => (props.selected ? '0.2rem solid #ecd018' : 'none')};
  padding: ${props => (props.selected ? '' : '0.2rem')};
  cursor: pointer;
`;

export const CategoryTitle = styled.h2`
  font-family: 'Fredericka the Great', cursive;
  margin-left: 3rem;
  font-size: 2rem;
  color: black;
  @media all and (max-width: 900px) {
    margin: 1rem;
    font-size: 1.5em;
  }
`;

export const Category = styled.div`
  margin-left: 3rem;
  @media all and (max-width: 900px) {
    margin: 1rem;
    font-size: 2em;
  }
`;

export const CategoryButton = styled.button`
  font-family: 'Fredericka the Great', cursive;
  text-transform: uppercase;
  background-color: white;
  color: black;
  border: 0.1rem solid black;
  margin: 0.5rem;
  padding: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: black;
    color: #ecd018;
  }
  @media all and (max-width: 900px) {
    margin: 0.2rem;
    font-size: 0.8rem;
  }
`;

export const CategoryButtonSelected = styled.button`
  font-family: 'Fredericka the Great', cursive;
  text-transform: uppercase;
  background-color: black;
  color: #ecd018;
  border: 0.1rem solid black;
  margin: 0.5rem;
  padding: 1rem;
  font-size: 1.5rem;
  &:hover,
  &:focus {
    background-color: black;
    color: #ecd018;
  }
  @media all and (max-width: 900px) {
    margin: 0.2rem;
    font-size: 1rem;
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

export const Polaroid = styled.div`
  width: 80%;
  background-color: white;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2),
    0 0.5rem 1rem 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2),
      0 1rem 2rem 0 rgba(0, 0, 0, 0.19);
  }
  @media all and (max-width: 900px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  text-align: center;
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  /* text-decoration: underline;
  text-decoration-color: #ecd018; */
  text-shadow: 3px 2px #ecd018;
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const Author = styled.div`
  text-align: center;
  padding: 0 1.5rem;
  font-size: 0.8rem;
  color: gray;
`;

export const PublishedAt = styled.div`
  text-align: center;
  padding: 0 1.5rem;
  font-size: 0.8rem;
  color: gray;
`;

export const Description = styled.p`
  text-align: center;
  padding: 1rem 1.5rem;
  color: gray;
  word-wrap: break-word;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Link = styled.a`
  color: ${props => props.color || 'black'};
  text-decoration: none;
  border-bottom: 2px solid #ecd018;
`;
