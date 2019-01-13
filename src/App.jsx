import React from 'react';

import HeaderContainer from './containers/HeaderContainer';
import FilterContainer from './containers/FilterContainer';
import ListContainer from './containers/ListContainer';
import FormContainer from './containers/FormContainer';

const App = () => (
  <div class='app'>
    <HeaderContainer/>
    <FilterContainer/>
    <ListContainer />
    <FormContainer />
  </div>
  );
      

export default App;
