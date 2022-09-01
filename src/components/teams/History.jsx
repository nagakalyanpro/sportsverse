import React from 'react'
import './teams.css';

const History = ({
    team1, team1score, team1avg, team2, team2score, team2avg, message
}) => {
  return (
    <div className='history-section'>
        <div className="history-modal">
           <div className="team-1">
            <div className="team-name">
            <h3>{team1}</h3>
            </div>
            <div className="count">
                {team1score}
                <div className="avg">
                    ({team1avg})
                </div>
            </div>
           </div>
           <div className="team-2">
            <div className="team-name">
            {team2score}
                <div className="avg">
                    ({team2avg})
                </div>
            </div>
            <div className="count">
                <h3>{team2}</h3>
                
            </div>
           </div>
        </div>
           <div className="message">
            <h4>{message}</h4>
           </div>
    </div>
  )
}

export default History