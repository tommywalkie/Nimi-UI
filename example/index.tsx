import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { USS } from '../dist/icons/';

const App = () => {
  return (
    <div>
        <USS width={50} height={50}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));