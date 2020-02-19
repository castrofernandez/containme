import React from 'react';

const App = ({field, changeField}) => {
  return (
      <React.Fragment>
          <h1>This is an example => "{field}".</h1>
          <button onClick={() => changeField('One')}>One</button>
          <button onClick={() => changeField('Two')}>Two</button>
      </React.Fragment>
  );
};

export default App;
