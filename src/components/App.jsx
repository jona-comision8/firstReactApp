import React from 'react'
import './app.css'

import ClassComponent from './ClassComponent';
import Timer from './timer/Timer';
import PropComponent from './PropComponent';
import StateLessComponent from './StatelessComponent';
import StatefulClassComponent from './StatefulClassComponent';

let users = [
  "Jona", "Maximo","Mati", "Yami", "Martin", "Pablo", "Román"
]

let apiResponse = false

function App() {
  return (
    <div>
      <StatefulClassComponent/>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <StateLessComponent/>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h2>Soy un componente funcional Stateless (Sin estado)</h2>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <ClassComponent/>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <Timer/>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <PropComponent userName="Mati" users={users} />
      <PropComponent>
        <div>
          <h2>Probando</h2>
        { apiResponse ? <h1>Hola soy component childen</h1> : "No hay respuesta"}
        </div>
      </PropComponent>
     
    </div>
  );
}

export default App;
