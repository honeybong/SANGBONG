import './App.scss';
import { useState } from 'react';

const App = (props) => {
  return (
    <div className='test'>
      <header className='test-header'>
        <div className='header-title'>
          큰 타이틀
        </div>
      </header>
      <body className='test-body'>
        <div className='scheduler'>
        </div>
      </body>
    </div>
  );
}

export default App;
