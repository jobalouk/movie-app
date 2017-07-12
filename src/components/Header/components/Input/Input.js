import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import styled from 'styled-components';

//services
import { getTv } from '../../../../services';

export default class Input extends Component {
constructor(props) {
  super(props)
  this.state = {
    value: '',
    data: []
  }
}

// controlled component
handleChange(e) {
  this.setState({
    value: e.target.value,
  })
}

//fetch from moviedb
componentDidMount() {
  getTv('https://api.themoviedb.org/3/tv/on_the_air?api_key=e4f00b15d80fdaee46ce135f6c59665d&language=en-US&page=1').then((results) => {
    this.setState({data: results.results})
  })
}

// utils
matchStateToTerm(item, value) {
  return item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
}

  render() {
    const {data} = this.state;

    return(
      <Autocomplete
        getItemValue={(item) => item.name}
        items={data}
        renderItem={(item, isHighlighted) =>
          <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item.name}
          </div>
        }
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        onSelect={(val) => this.setState({value: val})}
        shouldItemRender={this.matchStateToTerm}
        wrapperStyle={{width: '100%'}}
      />
    )
  }
}
