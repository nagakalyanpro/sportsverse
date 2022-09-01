import React from "react";
import teams from "../../scoreData/Teams";
import "./banner.css";

const Banner = () => {
  return (
    
    <div className="banner-section">
    <div className="banner-box">
      <div className="team-box">
        <div className="team-title">
          <h3>Teams</h3>
        </div>
        <div className="team-price">
          <h3>Price per Token</h3>
        </div>
      </div>

      {teams.map((team) => {
        const { teamName, teamPrice } = team;
        return (
          <div className="team-scores">
            <div className="team-name">
              <h4>{teamName}</h4>
            </div>
            <div className="team-amt">
              <h3 style={{color:"green"}}>${teamPrice}</h3>
            </div>
          </div>
        );
      })}
    </div>
    </div>
    
  );
};

export default Banner;
