import React from 'react';

import { formatDate } from '../Common/Util';

import {
  Polaroid,
  Image,
  Title,
  Link,
  Details,
  Author,
  PublishedAt,
  Description
} from '../Style/Style';

const goTo = url => {
  window.open(url,'_blank');
};

const New = props => (
  <Polaroid onClick={() => goTo(props.new.url)}>
    <Image src={props.new.urlToImage} />
    <Title>
      {props.new.url ? (
        <Link target="_blank" rel="noopener noreferrer" href={props.new.url}>
          {props.new.title}
        </Link>
      ) : (
        <React.Fragment>{props.item.title}</React.Fragment>
      )}
    </Title>
    <Details>
      {props.new.author ? <Author>By {props.new.author}</Author> : <div />}
      <PublishedAt>{formatDate(props.new.publishedAt)}</PublishedAt>
    </Details>
    <Description>{props.new.description}</Description>
  </Polaroid>
);

export default New;
