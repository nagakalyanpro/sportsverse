import React from "react";
import kolkata from "../../teamdata/Kolkata";
import History from "./History";
import './teams.css';

const kolvsbang={team1:"Chennai", team1score:"128/10", team1avg:"18.5", team2:"Bangalore", team2score:"132/7", team2avg:"19.2", message:"Bangalore won by 3 wkts"}
const kolvspun={team1:"Chennai", team1score:"114/4", team1avg:"14.3", team2:"Punjab", team2score:"137/10", team2avg:"18.2", message:"Kolkata won by 6 wkts"}
const kolvsmum={team1:"Chennai", team1score:"162/5", team1avg:"16.0", team2:"Mumbai", team2score:"161/4", team2avg:"20.0", message:"Kolkata won by 5 wkts"}
const kolvsdel={team1:"Chennai", team1score:"175/8", team1avg:"19.4", team2:"Delhi", team2score:"215/5", team2avg:"20.0", message:"Delhi won by 44 runs"}
const kolvshyd={team1:"Chennai", team1score:"210/10", team1avg:"17.5", team2:"Hyderabad", team2score:"176/3", team2avg:"17.5", message:"Hyderabad won by 7 wkts"}
const kolvsraj={team1:"Chennai", team1score:"148/8", team1avg:"20.0", team2:"Rajasthan", team2score:"217/5", team2avg:"20.0", message:"Rajasthan won by 7 runs"}
const kolvsguj={team1:"Chennai", team1score:"116/9", team1avg:"20.0", team2:"Gujarat", team2score:"156/9", team2avg:"20.0", message:"Gujarat won by 8 runs"}
const kolvsdlh={team1:"Chennai", team1score:"146/9", team1avg:"20.0", team2:"Delhi", team2score:"150/6", team2avg:"19.0", message:"Kolkata won by 4 wkts"}
const kolvsrjs={team1:"Chennai", team1score:"158/3", team1avg:"19.1", team2:"Rajasthan", team2score:"152/5", team2avg:"20.0", message:"Kolkata won by 7 wkts"}
const kolvslkn={team1:"Chennai", team1score:"101/10", team1avg:"14.3", team2:"Lucknow", team2score:"176/7", team2avg:"20.0", message:"Lucknow won by 75 runs"}
const kolvsmba={team1:"Chennai", team1score:"165/9", team1avg:"20.0", team2:"Mumbai", team2score:"113/10", team2avg:"17.3", message:"Kolkata won by 52 runs"}
const kolvshdb={team1:"Chennai", team1score:"177/6", team1avg:"20.0", team2:"Hyderabad", team2score:"123/8", team2avg:"20.0", message:"Kolkata won by 54 runs"}
const kolvslkw={team1:"Chennai", team1score:"208/8", team1avg:"20.0", team2:"Lucknow", team2score:"210/0", team2avg:"20.0", message:"Lucknow won by 2 runs"}
const kolvsche={team1:"Chennai", team1score:"133/4", team1avg:"18.3", team2:"Chennai", team2score:"131/5", team2avg:"20.0", message:"Lucknow won by 6 wkts"}

const Chennai = ({
  teamName,
  tokens,
  teamPrice,
  teamChange,
  matches,
  won,
  lost,
  netrate,
  points,
}) => {
  

  return (
   <div className="team-board">
     <div className="team-heading">
     <div className="team-name">
        <h3>Chennai(CSVC)</h3>
        <button>Import Token</button>
      </div>
      </div>
    <div className="token-address">
      <input type="text" />
    </div>
   <div className="modal-1">
   <div className="team-stats" >
      <h4>Number of Tokens</h4>
      <h2 >{tokens}</h2>
    </div>
    <div className="price">
      <h4>Current Price of Share</h4>
      <h2 style={{color:'green'}}>${teamPrice}</h2>
    </div>
<div className="change">
  <h4>24hr Change(%)</h4>
  <h2 style={{color:'green', paddding:"0px 30px", border:"2px solid red"}}>{teamChange}</h2>
 <div className="btn">
 <button>Buy</button>
  <button>Sell</button>
 </div>
</div>
   </div>
<div className="modal-2">
<div className="match">
  <p>Total Matches:</p>
  <h4>{matches}</h4>
</div>
<div className="won">
  <p>Total Won:</p>
  <h4>{won}</h4>
</div>
<div className="lost">
  <p>Total Lost:</p>
  <h4>{lost}</h4>
</div>
<div className="runrate">
  <p>Total net run rate:</p>
  <h4>{netrate}</h4>
</div>
<div className="points">
  <p>Total points:</p>
  <h4>{points}</h4>
</div>
     </div>
     <div className="history">
      <h2>Match History</h2>
     </div>
<div className="modal-3">
    <History {...kolvsbang} />
    <History {...kolvspun} />
    <History {...kolvsmum} />
    <History {...kolvsdel} />
    <History {...kolvshyd} />
    <History {...kolvsraj} />
    <History {...kolvsguj} />
    <History {...kolvsdlh} />
    <History {...kolvsrjs} />
    <History {...kolvslkn} />
    <History {...kolvsmba} />
    <History {...kolvshdb} />
    <History {...kolvslkw} />
    <History {...kolvsche} />
</div>
<div className="upcoming">
  <h2>Upcoming Matches</h2>
</div>
   </div>
  );
};

export default Chennai;
