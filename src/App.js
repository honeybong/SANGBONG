import './App.scss';
import { useState } from 'react';

const App = (props) => {
  // const getTableTr = () => {
  //   for (const i = 0; i > 7; i++) {
  //     return (
  //       <>
  //         <td>i</td>
  //       </>
  //     )
  //   }

  // } 
  console.log('1')
  console.log('2')
  console.log('3')
  console.log('4')
  console.log('5')
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
          <table className='scheduler'>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
            </tr>
            <tr>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
            </tr>
            <tr>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
            </tr>
            <tr>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
            </tr>
          </table>
        </div>
      </body>
      <footer className='test-footer'>
        <div className='test-mes'>
          블라블라
        </div>
      </footer>
    </div>
  );
}

export default App;
