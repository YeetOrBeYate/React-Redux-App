import React from "react";
import { connect } from "react-redux";
import { fetchHeros } from "../action/Actions";

const HeroList = (props)=>{

    return(
        <>
        {/* Dispatch is thunk becuase it passes it in from thunk */}
        <button onClick={() => props.dispatch(fetchHeros())}>Get Data</button>
        {props.isFetching && <div>⏰</div>}
        {props.error && <div>{props.error.message}</div>}
        <ul>
          {props.heros.map(p => (
            <li className="pokemon" key={p.name}>
              {p.name}
            </li>
          ))}
        </ul>
      </>
    );
}

const mapDispatchToProps ={
    fetchHeros
}

export default connect(state=>{
    return state;
})(HeroList);