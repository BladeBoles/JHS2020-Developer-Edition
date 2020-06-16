import React, { useState, useEffect } from 'react'

export default function CharacterGenerator() {
  
  const [state, setState] = useState({
    new_character: {
      character_owner: 0,
      character_name: "New Character",
      character_avatar: "https://www.placecage.com/100/100",
      pet_name: "Killer",
      pet_type: "Fish",
      pet_avatar: "https://www.placecage.com/200/200"
    },

    new_portfolio: {
      portfolio_owner: 0,
      career_path: "Front End",
      background: "Starving Artist",
      personality: "Nerdy",
      education: "Art",
      bootcamp: "Good",
      project_1_name: "Meme Generator 9002",
      project_1_description: "Scouter breaking",
      project_1_image: "https://www.placecage.com/155/155",
      project_2_name: "Meme Generator 9003",
      project_2_description: "Scouter breakore",
      project_2_image: "https://www.placecage.com/255/255",
      project_3_name: "Meme Generator 9004",
      project_3_description: "It's over 8999+1!",
      project_3_image: "https://www.placecage.com/355/355"
    },

    new_skills: {
      skills_owner: 0,
      front_end: 1,
      back_end: 1,
      computer_science: 1,
      soft_skills: 1,
      luck: 1
    },

    new_stats: {
      stats_owner: 0,
      funds: 100,
      happiness: 100,
      connections: 1,
      energy: 100,
      health: 100,
      current_week: 1
    }
  });

  return (
        <div>
            <h2>Create A Character</h2>
    <form>
      <label htmlFor="character-name">Character name: </label>
      <input type="text" id="character-name" />
      <label htmlFor="previous-job">
        One day, something changed for you.  You just
        couldn't do your old job as a(n)
      </label>
      <select name="previous-job" id="previous-job">
        <option value="Accountant">Accountant</option>
        <option value="Salesperson">Salesperson</option>
        <option value="Artist">Starving Artist</option>
        <option value="FryCook">Zadonald's Burger Flipper</option>
        <option value="Criminal">Criminal Mastermind</option>
      </select>
      <label htmlFor="career-focus">
        any longer.  After much soul and web searching,
        you've decided to become a
      </label>
      <select name="career-focus" id="career-focus">
        <option value="FrontEnd">Front End Developer.</option>
        <option value="BackEnd">Back End Developer.</option>
        <option value="FullStack">Full Stack Developer.</option>
      </select>
      <label htmlFor="left-job">
        After settling on your new career path, you
      </label>
      <select name="left-job" id="left-job">
        <option value="RageQuit">
          snapped at your manager Al and rage quit.
          (-1 Connection, Start at week 1)
        </option>
        <option value="TwoWeeks">
          put in your two weeks notice and worked
          it out. (+$1500, Start week 3)
        </option>
        <option value="FourWeeks">
          were extra polite and worked out the month.
          (+$3000, +1 Connection, Start week 5)
        </option>
      </select>
      <label htmlFor="bootcamp">
        After carefully weighing your options, you
        decide to
      </label>
      <select name="bootcamp" id="bootcamp">
        <option value="none">
          complete the entire freeCodeCamp curriculum.
          (Learn as you go)
        </option>
        <option value="scammy">
          attend Scamzalot University.
          (6 weeks)
        </option>
        <option value="good">
          attend Okie Doke Academy.
          (15 weeks)
        </option>
        <option value="great">
          attend Mindfill Institute.
          (24 weeks)
        </option>
      </select>
      <label htmlFor="degree">
        You hope your
      </label>
      <select name="degree" id="degree">
        <option value="none">
          lack of student debt
        </option>
        <option value="basketweaving">
          BS in basketweaving
        </option>
        <option value="art">
          BA in visual art
        </option>
        <option value="business">
          MBA
        </option>
        <option value="biology">
          Associates degree in Biology
        </option>
      </select>
      <label htmlFor="personality">
        and your
      </label>
      <select name="personality" id="personality">
        <option value="artsy">
          artsy fartsy personality
        </option>
        <option value="nerdy">
          nerdy interests
        </option>
        <option value="charismatic">
          people skills
        </option>
        <option value="basic">
          love of pumpkin spice lattes
        </option>
      </select>
      <label htmlFor="pet">
        somehow come in handy!  Either way, you know
        your pet
      </label>
      <select name="pet" id="pet">
        <option value="dog">dog</option>
        <option value="cat">cat</option>
        <option value="fish">fish</option>
      </select>
      <label htmlFor="pet-name">
        named
      </label>
      <input type="text" />
      <p>will be there to support you!</p>
    </form>
        </ div>
        
    )
}
