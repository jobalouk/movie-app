import { connect } from 'react-redux'
import OnTheAir from '../scenes/Home/components/OnTheAir/OnTheAir';
import React, { Component } from 'react';

// High Order Component
function fetchTv(WrappedTv) {
  return class extends Component {
    componentDidMount() {
      fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=e4f00b15d80fdaee46ce135f6c59665d&language=en-US&page=1')
      .then((response) =>  {
          return response.json();
      }).then((results) => {
          this.props.fetchComplete(results);
      }).catch((err) =>  {
          this.props.fetchError(err);
      });
    }
    render() {
      return (
        <WrappedTv {...this.props} />
      );
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchComplete(tv){
      dispatch({ type: 'FETCH_TODOS_SUCCESS', tv});
    },
    fetchError(tv){
      dispatch({ type: 'FETCH_TODOS_ERROR', tv});
    },
  }
}

function mapStateToProps(state) {
  return {
    tv: state.onTheAir.results,
  }
}

const OnTheAirContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(fetchTv(OnTheAir));

export default OnTheAirContainer;
