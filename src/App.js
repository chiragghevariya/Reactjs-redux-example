import React, { useState } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {BuyCarAction} from "./redux/action/BuyCarAcion";

function App(props) {

  const [number,setNumber] = useState('0');
  return (
    <div className="App">
        Total Car :{props.totalCar }
        <input type="text" onChange={ e => setNumber(e.target.value)} />
        <button onClick={()=>props.Buycar(number)}>Buy Car</button>
    </div>
  );
}

const MapStateToProps = (state) => {
  return {
    totalCar: state.car.totalCar,
  };
};

// Setup Dispatch for our button events. 
const MapDispatchToProps = (dispatch) => {
  return {
    Buycar: (number) => dispatch(BuyCarAction(number))
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(App);