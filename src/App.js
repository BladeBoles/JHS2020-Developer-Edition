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
      const result = (await fetch('http://localhost:8000/profiles')).json()
      // setState({
      //   name: result[0].account_name
      // })
      console.log(result)
      const stats = (await fetch('http://localhost:8000/stats')).json()
      // setState({
      //   health: stats.json()[0].health,
      //   funds: stats.json()[0].funds,
      //   happiness: stats.json()[0].happiness,
      //   connections: stats.json()[0].connections,
      //   energy: stats.json()[0].energy,
      //   week: stats.json()[0].current_week,
      // })
      console.log(stats)
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
