import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = (props) => (
  <header>
    <Stats todos={props.todos} />
    <h1>Redux Todo</h1>
    <Stopwatch />
  </header>
);

Header.propTypes = {
    todos: PropTypes.array.isRequired
};

export default Header;
