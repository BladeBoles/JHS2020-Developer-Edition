/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';

export default function Dashboard(props) {
  const { profiles, characters, stats, skills, portfolios } = props.values;
  console.log(portfolios)
  let userSignedIn = profiles.length > 1 ? (profiles[0].account_id - 1) : 0;

  let userCharacter = profiles.length > 1 ? characters[userSignedIn].character_name : 'Default Character';

  let characterCareer = portfolios.length > 1 ? portfolios[userSignedIn].career_path : 'Default Career'

  let characterStats = stats.length > 1 ? stats[userSignedIn] : null;

  let characterSkills = skills.length > 1 ? skills[userSignedIn] : null;


  return (
    <div>
      <section>
        {profiles.length > 1 && 
          <h1>{userCharacter}, `{characterCareer} Developer`</h1>
        }

        <div className="image-container">
          <img src="https://i.ibb.co/cr6Y2Bc/DZB9p-Xa-XUAAi-REc.jpg" alt="DZB9p-Xa-XUAAi-REc" border="0" width="64" />
          <img src="https://placekitten.com/64/64" alt="" />
        </div>

        <h2>Status:</h2>
        <div className="status-sections">
          <div id="resources-status">
            <h3>Resources</h3>
            <ul className="stats-list">
              {characterStats &&
              <li>Funds: ${characterStats.funds}</li>            }
              {characterStats && 
              <li>Happiness: {characterStats.happiness}/100</li>
              }
              {characterStats && 
              <li>Connections: {characterStats.connections}/20</li>
              }
              {characterStats && 
              <li>Caffeine: {characterStats.energy}/100</li>
              }
              {characterStats && 
              <li>Health: {characterStats.health}/100</li>
              }
            </ul>
          </div>
          <div id="skills-status">
            <h3>Stats</h3>
            <ul className="skills-list">
              {characterSkills &&
              <li>Front End: {characterSkills.front_end}/10</li>
              }
              {characterSkills &&
              <li>Back End: {characterSkills.back_end}/10</li>
              }
              {characterSkills &&
              <li>Computer Science: {characterSkills.computer_science}/10</li>
              }
              {characterSkills &&
              <li>Interpersonal: {characterSkills.soft_skills}/10</li>
              }
              {characterSkills &&
              <li>Luck: {characterSkills.luck}/10</li>
              }
            </ul>
          </div>

        </div>
        <button>View Portfolio</button>
      </section>
    </div>
  )
}