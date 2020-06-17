import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from './components/bootstrap-exmple/ButtonComponent';
import DropdownComponent from './components/bootstrap-exmple/DropdwonComponent';
import FooComponent from './components/bootstrap-exmple/FooComponent';
import SwitchAlert from './components/bootstrap-exmple/SwitchErrorAlert';


function App() {
  return (
    <div className="App">
        {/* <ButtonComponent />
        <DropdownComponent />
        <FooComponent /> */}
        <SwitchAlert />
    </div>
  );
}

export default App;
