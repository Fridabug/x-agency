import React from "react";
import team from '../../context/json/team.json'

export default function About() {
  return (
    <div className="page-content">
      <h1>About us</h1>
      <div className="about-text">
      <p>Our team provides personal, professional and friendly service which carefully considers your business goals and requirements. We transform innovative visions into brilliant realities. Got one? Let’s make outstanding work together!</p></div>

      <div className="teamContainer">
      {team.team && team.team.map((member, index) => 
        <div key={member.id} className="card m-2 team-member" style={{width: "16rem"}}>
          <div className="card-body">
            <img src={member.image}/>
            <p className="card-title">{member.name}</p>
            {member.position.map((position, index) => <span className="card-text">{position} </span>)}
          </div>
  
        </div>)}
      </div>
      
      
  </div>
  );
}
