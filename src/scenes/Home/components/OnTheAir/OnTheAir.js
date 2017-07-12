import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../Section';

export default class OnTheAir extends Component {

  render() {
    const { tv } = this.props;
    console.log(tv);

    return (
      <Section className="media">
        <h2>Série en cours de diffusion</h2>
        {
          tv.map((item, index) =>
          <div key={index}>
            <a href="/tv"><img alt="backdrop" src={`http://image.tmdb.org/t/p/w500${item.backdrop_path}`}/></a>
            <span className="info">
              <a href="/tv">{item.name}</a>
            </span>
          </div>)
        }
      </Section>
    );
  }
}
