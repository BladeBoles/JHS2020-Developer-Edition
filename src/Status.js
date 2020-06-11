import React from 'react';

export default function Dashboard(props) {
  console.log(props.values.name)
  return (
    <div>
      <section>
      <h1>{props.values.name}, "Full Stack Developer"</h1>
        <div class="image-container">
          <img src="https://i.ibb.co/cr6Y2Bc/DZB9p-Xa-XUAAi-REc.jpg" alt="DZB9p-Xa-XUAAi-REc" border="0" width="64" />
          <img src="https://placekitten.com/64/64" alt="" />
        </div>
      <h2>Status:</h2>
      <div class="status-sections">
        <div id="resources-status">
          <h3>Resources</h3>
          <ul class="stats-list">
            <li>Funds: ${props.values.funds}</li>
            <li>Happiness: {props.values.happiness}/100</li>
            <li>Connections: {props.values.connections}</li>
            <li>Caffeine: {props.values.energy}/100</li>
            <li>Health: {props.values.health}/100</li>
          </ul>
        </div>
        <div id="skills-status">
          <h3>Stats</h3>
          <ul class="skills-list">
            <li>Front End Skills: 5/10</li>
            <li>Back End Skills: 5/10</li>
            <li>Computer Science: 5/10</li>
            <li>Soft Skills: 4/10</li>
            <li>Luck: 3/10</li>
          </ul>
        </div>

       </div>
        <button>View Portfolio</button>
      </section>
    </div>
  )
}
