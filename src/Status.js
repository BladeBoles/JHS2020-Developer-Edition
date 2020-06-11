import React from 'react';

export default function Dashboard(props) {
  const { profiles, characters, stats, skills } = props.values;
  const userSignedIn = profiles[0].account_id ? profiles[0].account_id : 0;
  const userCharacter = profiles.length > 1 ? characters[userSignedIn].character_name : 'Default Character';
  const characterStats = stats[userSignedIn]
  const characterSkills = skills[userSignedIn]
  // const skillsList = profiles.length > 1 && Object.keys(characterSkills)
  // const skillsMap = skillsList.length > 1 && skillsList.map(skill => <li>{skill}: {characterSkills[skill]} / 10</li>)
  // const skillsDisplay = skillsMap.length > 1 && skillsMap.slice(2)

  return (
    <div>
      <section>
        {profiles.length > 1 && 
          <h1>{userCharacter}, "Full Stack Developer"</h1>
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
            {stats.length > 1 && 
              <li>Funds: ${characterStats.funds}</li>
            }
            {stats.length > 1 && 
              <li>Happiness: {characterStats.happiness}/100</li>
            }
            {stats.length > 1 && 
              <li>Connections: {characterStats.connections}</li>
            }
            {stats.length > 1 && 
              <li>Caffeine: {characterStats.energy}</li>
            }
            {stats.length > 1 && 
              <li>Health: {characterStats.health}</li>
            }
          </ul>
        </div>
        <div id="skills-status">
          <h3>Stats</h3>
          <ul className="skills-list">
            {skills.length > 1 &&
              <li>Front End: {characterSkills.front_end}/10</li>
            }
            {skills.length > 1 &&
              <li>Back End: {characterSkills.back_end}/10</li>
            }
            {skills.length > 1 &&
              <li>Computer Science: {characterSkills.computer_science}/10</li>
            }
            {skills.length > 1 &&
              <li>Interpersonal: {characterSkills.soft_skills}/10</li>
            }
            {skills.length > 1 &&
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
