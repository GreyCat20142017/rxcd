import React from 'react';
import PropTypes from 'prop-types';

import FilterLink from './FilterLink';
import {FILTER_VALUES} from '../constants';

const Filter = (props) => (

<div className="todo-filter">
  <FilterLink
    icon="list"
    active={props.activeFilter === FILTER_VALUES.ALL}
    onClick={() => props.onSetFilter(FILTER_VALUES.ALL)}>
  </FilterLink>

  <FilterLink
    icon="check_box"
    active={props.activeFilter === FILTER_VALUES.COMPLETED}
    onClick={() => props.onSetFilter(FILTER_VALUES.COMPLETED)}>
  </FilterLink>

  <FilterLink
    icon="check_box_outline_blank"
    active={props.activeFilter === FILTER_VALUES.UNCOMPLETED}
    onClick={() => props.onSetFilter(FILTER_VALUES.UNCOMPLETED)}>
</FilterLink>
</div>
);

Filter.propTypes = {
    activeFilter: PropTypes.string.isRequired,
    onSetFilter: PropTypes.func.isRequired
};

export default Filter;
