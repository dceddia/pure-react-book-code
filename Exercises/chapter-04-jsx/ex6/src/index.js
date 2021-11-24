import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <td>Cell1</td>
          <td>Cell2</td>
          <td>Cell3</td>
        </tr>
      </tbody>
    </table>
  )
}

function RefactoredTable() {
  return (
    <table>
      <tbody>
        <tr>
          <Data/>
        </tr>
      </tbody>
    </table>
  )
}

function Data() {
  return (
    <Fragment>
      <td>Cell1</td>
      <td>Cell2</td>
      <td>Cell3</td>
    </Fragment>
  )
}

function Sandbox() {
  return (
    <div>
      Plain table:
      <Table/>
      <br/>
      <br/>
      Table with Fragment:
      <RefactoredTable/>
    </div>
  )
}

ReactDOM.render(<Sandbox />, document.getElementById('root'));
