// This file renders the application in the html document. Here we use the
// plugin the first time.

define(['react', 'react-dom', 'jsx!./Greet'], function(React, ReactDOM, Greet) {
  ReactDOM.render(
    <Greet name="World"/>,
    document.getElementById('root')
  );
});
