import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CategoryTitle = styled.h2`
  font-family: 'Fredericka the Great', cursive;
  margin-left: 3rem;
  font-size: 2rem;
  color: black;
  @media all and (max-width: 900px) {
    margin: 1rem;
    font-size: 1.5em;
  }
`;

const Category = styled.div`
  margin-left: 3rem;
  @media all and (max-width: 900px) {
    margin: 1rem;
    font-size: 2em;
  }
`;

const Button = styled.button`
  font-family: 'Fredericka the Great', cursive;
  text-transform: uppercase;
  background-color: ${(props) => (props.selected ? 'black' : 'white')};
  color: ${(props) => (props.selected ? '#ecd018' : 'black')};
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

const aCategories = [
  { name: 'world', topic: 'world', isActive: false },
  { name: 'nation', topic: 'nation', isActive: false },
  { name: 'business', topic: 'business', isActive: false },
  { name: 'technology', topic: 'technology', isActive: false },
  { name: 'entertainment', topic: 'entertainment', isActive: false },
  { name: 'sports', topic: 'sports', isActive: false },
  { name: 'science', topic: 'science', isActive: false },
  { name: 'health', topic: 'health', isActive: false },
];

export const Categories = ({
  selectCategory,
  clearCategory,
  setClearCategory,
}) => {
  const [categories, setCategories] = useState(aCategories);

  useEffect(() => {
    if (clearCategory) {
      setCategories((prevCategories) => {
        return prevCategories.map((prevCategory) => {
          prevCategory.isActive = false;
          return prevCategory;
        });
      });
      setClearCategory(false);
    }
  }, [clearCategory, setClearCategory]);

  return (
    <div>
      <CategoryTitle>Select a category</CategoryTitle>
      <Category>
        {categories &&
          categories.map((category) => (
            <Button
              key={category.name}
              selected={category.isActive}
              onClick={() => {
                setCategories((prevCategories) => {
                  return prevCategories.map((prevCategory) => {
                    if (prevCategory.name === category.name) {
                      prevCategory.isActive = true;
                    } else {
                      prevCategory.isActive = false;
                    }
                    return prevCategory;
                  });
                });
                selectCategory(category.name);
              }}
            >
              {category.name}
            </Button>
          ))}
      </Category>
    </div>
  );
};
