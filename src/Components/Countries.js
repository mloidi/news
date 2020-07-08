import React, { useState } from 'react';
import styled from 'styled-components';

const CountrySelector = styled.div`
  font-size: 1.3rem;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 1rem;
  align-content: start;
`;

const Flag = styled.img`
  border: ${(props) => (props.selected ? '0.2rem solid #ecd018' : 'none')};
  padding: ${(props) => (props.selected ? '' : '0.2rem')};
  cursor: pointer;
`;

export const Countries = ({ selectCountry }) => {
  const [countries, setCountries] = useState([
    {
      code: 'us',
      isActive: true,
      flag:
        'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_50/v1554644169/mloidi/us.png',
    },
    {
      code: 'ca',
      isActive: false,
      flag:
        'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_50/v1554644169/mloidi/ca.png',
    },
  ]);

  return (
    <CountrySelector>
      News from
      {countries &&
        countries.map((country) => (
          <div
            key={country.code}
            onClick={() => {
              setCountries((prevCountries) => {
                return prevCountries.map((prevCountry) => {
                  if (prevCountry.code === country.code) {
                    prevCountry.isActive = true;
                  } else {
                    prevCountry.isActive = false;
                  }
                  return prevCountry;
                });
              });
              selectCountry(country.code);
            }}
          >
            <Flag
              selected={country.isActive}
              src={country.flag}
              alt={country.code}
            />
          </div>
        ))}
    </CountrySelector>
  );
};
