import React from "react";
import {connect} from 'react-redux';
import {mixCards} from '../../redux/actions'
import Cards from "../Card/Cards";
import "./Styles.css";

const GameBoard = ({mixCards}) => {

  mixCards();
    
  return (
    <div className="gameboard">
      <Cards />
    </div>
  );
};

export default connect(null, {mixCards})(GameBoard);
