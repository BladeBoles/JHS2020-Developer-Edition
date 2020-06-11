import React from 'react';

export default function Dashboard(props) {
  console.log(props.values)
  const { profiles, characters, stats, skills } = props.values;
  const userSignedIn = 0;

  return (
    <div>
      <section>
      <h1>{characters[userSignedIn].character_name || "Default Name"}, "Full Stack Developer"</h1>
        <div class="image-container">
          <img src="https://i.ibb.co/cr6Y2Bc/DZB9p-Xa-XUAAi-REc.jpg" alt="DZB9p-Xa-XUAAi-REc" border="0" width="64" />
          <img src="https://placekitten.com/64/64" alt="" />
        </div>
      <h2>Status:</h2>
      <div class="status-sections">
        <div id="resources-status">
          <h3>Resources</h3>
          <ul class="stats-list">
            <li>Funds: ${stats[userSignedIn].funds || 0}</li>
            <li>Happiness: {stats[userSignedIn].happiness || 100}/100</li>
            <li>Connections: {stats[userSignedIn].connections || 0}</li>
            <li>Caffeine: {stats[userSignedIn].energy || 100}/100</li>
            <li>Health: {stats[userSignedIn].health || 100}/100</li>
          </ul>
        </div>
        <div id="skills-status">
          <h3>Stats</h3>
          <ul class="skills-list">
            <li>Front End Skills: {skills[0].front_end || 0}/10</li>
            <li>Back End Skills: {skills[0].back_end || 0}/10</li>
            <li>Computer Science: {skills[0].computer_science || 0}/10</li>
            <li>Soft Skills: {skills[0].soft_skills || 0}/10</li>
            <li>Luck: {skills[0].luck || 0}/10</li>
          </ul>
        </div>

       </div>
        <button>View Portfolio</button>
      </section>
    </div>
  )
}
