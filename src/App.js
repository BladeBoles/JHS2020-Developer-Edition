import React, { useState, useEffect } from 'react';
import './App.css';
import Status from './Status'
import Dashboard from './Dashboard'

function App() {
  const [state, setState] = useState({
    name: 'Default Name',
    health: 100,
    funds: 0,
    happiness: 100,
    energy: 100,
    connections: 0,
    week: 1
  })

  useEffect(() => {
    const fetchProfiles = async () => {
      const result = await (await fetch('http://localhost:8000/profiles')).json()
      console.log(result[0].account_name)
      setState({
        name: result[0].account_name
      })
      console.log(state)
      const stats = await (await fetch('http://localhost:8000/stats')).json()
      setState({
        health: stats[0].health,
        funds: stats[0].funds,
        happiness: stats[0].happiness,
        connections: stats[0].connections,
        energy: stats[0].energy,
        week: stats[0].current_week,
      })
      console.log(stats)
      console.log(state)
    }
    fetchProfiles();
  }, [])
  
  return (
    <div className="App">
      <Status values={state} />
      <Dashboard />
    </div>
  );
}

export default App;
