import React, { Component } from 'react';
import styled from 'styled-components';

//components
import Nav from './components/Nav/Nav';
import Input from './components/Input/Input';

import logo from './logo.png';

class Header extends Component {
  render() {
    return (
      <header className={this.props.className}>
        <div className="group">
          <div className="content">
            <h1 className="logo"><img src={logo}/></h1>
            <Nav />
          </div>
          <Input />
        </div>
      </header>
    );
  }
}

export default styled(Header)`
  background-color: #081c24;

  .nav {
    padding-top: 25px;
  }
  .logo {
    float: left;
    margin-right: 15px;
  }
  .content {
    width: 1000px;
    margin: 0 auto;
    padding: 15px 0;
  }
  .group:after {
    content: "";
    display: table;
    clear: both;
  }
  a {
    color: white;
    text-decoration: none;
    margin-right: 15px;
  }
  .logo {
    float: left;
  }
  input[role] {
    display: inline-block;
    width: 100%;
    height: 30px;
    border: none;
    box-shadow: 0px 0px  2px 1px rgba(0, 0, 0, 0.2);
  }
`;
