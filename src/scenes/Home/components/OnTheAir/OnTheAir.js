import React from 'react';
import Section from '../Section';

const OnTheAir = (props) => (

  <Section className="media">
    <h2>Série en cours de diffusion</h2>
    {
      props.tv ? props.tv.map((item, index) =>
      <div key={index}>
        <a href="/tv"><img alt="backdrop" src={`http://image.tmdb.org/t/p/w500${item.backdrop_path}`}/></a>
        <span className="info">
          <a href="/tv">{item.name}</a>
        </span>
      </div>) : console.log('chargement')
    }
  </Section>
)

export default OnTheAir;
