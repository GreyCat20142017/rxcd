import {connect} from 'react-redux';

import Header from '../components/Header';

const mapStateToProps = (state) => ({
  todos: state.todos
});

const HeaderContainer = connect(mapStateToProps, null)(Header);

export default HeaderContainer;