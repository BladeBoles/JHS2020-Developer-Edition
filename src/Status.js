import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const[name, setName] = useState('Default Name')
  const[health, setHealth] = useState(100)
  const[funds, setFunds] = useState(0)
  const[happiness, setHappiness] = useState(100)
  const[energy, setEnergy] = useState(100)
  const[connections, setConnections] = useState(0)
  const[week, setWeek] = useState(1)

  useEffect(() => {
    fetch('http://localhost:8000/profiles')
      .then(response => response.json())
      .then(data => setName(data[0].account_name))

    fetch('http://localhost:8000/stats')
      .then(response => response.json())
      .then(data => 
        {
          setHealth(data[0].health);
          setFunds(data[0].funds);
          setHappiness(data[0].happiness);
          setEnergy(data[0].energy);
          setConnections(data[0].connections);
          setWeek(data[0].current_week);
        })
  })
  return (
    <div>
      <section>
      <h1>{name}, "Full Stack Developer"</h1>
        <div class="image-container">
          <img src="https://i.ibb.co/cr6Y2Bc/DZB9p-Xa-XUAAi-REc.jpg" alt="DZB9p-Xa-XUAAi-REc" border="0" width="64" />
          <img src="https://placekitten.com/64/64" alt="" />
        </div>
      <h2>Status:</h2>
      <div class="status-sections">
        <div id="resources-status">
          <h3>Resources</h3>
          <ul class="stats-list">
            <li>Funds: ${funds}</li>
            <li>Happiness: {happiness}/100</li>
            <li>Connections: {connections}</li>
            <li>Caffeine: {energy}/100</li>
            <li>Health: {health}/100</li>
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
