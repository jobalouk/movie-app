import React, { Component } from 'react';
import styled from 'styled-components';

//components
import Nav from './components/Nav/Nav';
import Input from './components/Input/Input';

class Header extends Component {
  render() {
    return (
      <header className={this.props.className}>
        <div className="group">
          <Nav />
          <Input />
        </div>
      </header>
    );
  }
}

export default styled(Header)`
  background-color: #081c24;
  .group:after {
    content: "";
    display: table;
    clear: both;
  }
  a {
    color: white;
    text-decoration: none;
  }
  .logo {
    float: left;
  }
  .searchBar[placeholder] {
    font-style: italic;
    font-family: source sans pro;
    font-size: 18px;
    font-weight: 300;
    border: none;
  }

  input[role] {
    display: inline-block;
    width: 100%;
    height: 30px;
    border: none;
    box-shadow: 0px 0px  2px 1px rgba(0, 0, 0, 0.2);
  }
`;
