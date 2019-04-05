import React from 'react';

import { formatDate } from '../Common/Util';

import {
  Polaroid,
  Image,
  Title,
  Details,
  Author,
  PublishedAt,
  Description
} from '../Style/Style';

const goTo = url => {
  window.open(url, '_blank');
};

const checkText = text => {
  if (text && (text.startsWith('https://') || text.startsWith('http://')))
    return null;
  return text;
};

const New = props => (
  <Polaroid onClick={() => goTo(props.new.url)}>
    <Image src={props.new.urlToImage} />
    <Title>{props.new.title}</Title>
    <Details>
      {checkText(props.new.author) ? (
        <Author>By {props.new.author}</Author>
      ) : (
        <div />
      )}
      <PublishedAt>{formatDate(props.new.publishedAt)}</PublishedAt>
    </Details>
    {checkText(props.new.description) ? (
      <Description>{props.new.description}</Description>
    ) : (
      <div />
    )}
  </Polaroid>
);

export default New;
