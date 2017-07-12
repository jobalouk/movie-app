import React, { Component } from 'react';
import styled from 'styled-components';

//component
import Section from '../Section';

//services
import { getMovie } from '../../../../services'

export default class NowPlaying extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  //fetch from moviedb
  componentDidMount() {
    getMovie('https://api.themoviedb.org/3/movie/now_playing?api_key=e4f00b15d80fdaee46ce135f6c59665d&language=fr-FR&page=1').then((results) => {
      this.setState({data: results.results})
    })
  }

  render() {
    const { data } = this.state;
    console.log(data);

    return (
      <Section className="media">
        <button>Filtrer par popularité</button>
        <h2>Film à l'affiche</h2>
        {
          data.map((item, index) =>
          <div key={index}>
            <a href="/tv"><img alt="backdrop" src={`http://image.tmdb.org/t/p/w500${item.backdrop_path}`}/></a>
            <span className="info">
              <a href="/tv">{item.title}</a>
            </span>
          </div>)
        }
      </Section>
    );
  }
}
