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
        <div className='body-container'>
          {/* <div className='scheduler' /> */}
          <table>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
            </tr>
          </table>
        </div>
      </body>
    </div>
  );
}

export default App;
