import React, { Component } from 'react';
import { CategoryButton, CategoryButtonSelected } from '../Style/Style';

export default class Button extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.category.isActive ? (
          <CategoryButtonSelected id={this.props.category.name}>
            {this.props.category.name}
          </CategoryButtonSelected>
        ) : (
          <CategoryButton
            id={this.props.category.name}
            onClick={this.props.selectCategory}
          >
            {this.props.category.name}
          </CategoryButton>
        )}
      </React.Fragment>
    );
  }
}
