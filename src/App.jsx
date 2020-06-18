import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CharacterGenerator from './CharacterGenerator'
import Status from './Status'
import Dashboard from './Dashboard'

function App() {
  const [state, setState] = useState({
    profiles: [
      { account_id: 1, account_name: "default_account" }
    ],

    characters:
      [
        {
          character_owner: 1,
          character_id: 1,
          character_name: "Default Character Name",
          character_avatar: "",
          pet_name: "Default Pet Name",
          pet_type: "Dog",
          pet_avatar: ""
        }
      ],

    stats:
      [
        {
          stats_id: 1,
          "stats_owner": 1,
          "funds": 10000,
          "happiness": 50,
          "connections": 5,
          "energy": 68,
          "health": 35,
          "current_week": 30
        }
      ],

    skills: 
      [
        {
          "skills_id": 1,
          "skills_owner": 1,
          "front_end": 6,
          "back_end": 3,
          "computer_science": 4,
          "soft_skills": 6,
          "luck": 2
        }
      ],

    portfolios: 
      [
        {
          "portfolio_id": 1,
          "portfolio_owner": 1,
          "career_path": "Front End",
          "background": "Fast Food",
          "personality": "Basic",
          "education": "Basketweaving",
          "bootcamp": "Scam",
          "project_1_name": "Meme Generator 9001",
          "project_1_description": "Breaking scouters",
          "project_1_image": "https://www.placecage.com/200/200",
          "project_2_name": "TODO-a11y",
          "project_2_description": "not another todo app.",
          "project_2_image": "https://www.placecage.com/250/250",
          "project_3_name": null,
          "project_3_description": null,
          "project_3_image": null
        }
      ]
  })

  useEffect(() => {
    const fetchProfiles = async () => {
      const profiles = await (await fetch('http://localhost:8000/profiles')).json()
      const characters = await (await fetch('http://localhost:8000/characters')).json()
      const stats = await (await fetch('http://localhost:8000/stats')).json()
      const skills = await (await fetch('http://localhost:8000/skills')).json()
      const portfolios = await (await fetch('http://localhost:8000/portfolios')).json()

      setState({
        profiles,
        characters,
        stats,
        skills,
        portfolios
      })
    }
    fetchProfiles();
  }, [])
  
  return (
    <div className="App">
      <Route
        path="/generator"
        component={CharacterGenerator}
      />
      
      <Route path="/dashboard">
        <Status values={state} />
      </Route>
      
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </div>
  );
}

export default App;
