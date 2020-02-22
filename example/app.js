import React from 'react';

const App = ({field, changeField}) => {
  return (
      <React.Fragment>
          <h1>This is an example => "<span id="label">{field}</span>".</h1>
          <button id="btn1" onClick={() => changeField('One')}>One</button>
          <button id="btn2" onClick={() => changeField('Two')}>Two</button>
      </React.Fragment>
  );
};

export default App;
