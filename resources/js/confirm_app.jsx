import React from 'react'
import ReactDOM from 'react-dom'
import Confirm from './components/confirm'

const data = JSON.parse(document.getElementById('app').dataset.data);

ReactDOM.render(
  <React.StrictMode>
    <Confirm data={data} />
  </React.StrictMode>,
  document.getElementById('app')
)