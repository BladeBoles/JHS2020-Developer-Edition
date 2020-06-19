import React, { useState, useEffect } from 'react'
import useCustomForm from "./CustomForm"
import { Link } from 'react-router-dom';

const initialValues = {
  // new_character: {}
  character_owner: 1,
  character_name: "New Character",
  character_avatar: "https://www.placecage.com/100/100",
  pet_name: "Killer",
  pet_type: "fish",
  pet_avatar: "https://www.placecage.com/200/200",

  // new_portfolio: {}
  portfolio_owner: 1,
  career_path: "Front End",
  background: "Starving Artist",
  left_job: "Two Weeks",
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
  project_3_image: "https://www.placecage.com/355/355",
    
  // new_skills: {}
  skills_owner: 1,
  front_end: 1,
  back_end: 1,
  computer_science: 1,
  soft_skills: 1,
  luck: 1,

  // new_stats: {}
  stats_owner: 1,
  funds: 100,
  happiness: 100,
  connections: 1,
  energy: 100,
  health: 100,
  current_week: 1
};

const CharacterGenerator = (props) => {

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = useCustomForm({
    initialValues,
    onSubmit: (values) => {
      console.log(values)
      const {
        character_owner, 
        character_name, 
        character_avatar,
        pet_name,
        pet_type,
        pet_avatar
      } = values.values;
      const new_character = {
        character_owner, 
        character_name, 
        character_avatar,
        pet_name,
        pet_type,
        pet_avatar
      }
      console.log("new_character object: ", new_character)

      const {
        portfolio_owner,
        career_path,
        background,
        left_job,
        personality,
        education,
        bootcamp,
        project_1_name,
        project_1_description,
        project_1_image,
        project_2_name,
        project_2_description,
        project_2_image,
        project_3_name,
        project_3_description,
        project_3_image
      } = values.values;
      const new_portfolio = {
        portfolio_owner,
        career_path,
        background,
        left_job,
        personality,
        education,
        bootcamp,
        project_1_name,
        project_1_description,
        project_1_image,
        project_2_name,
        project_2_description,
        project_2_image,
        project_3_name,
        project_3_description,
        project_3_image
      }
      console.log("new_portfolio object: ", new_portfolio)

      const {
        skills_owner,
        front_end,
        back_end,
        computer_science,
        soft_skills,
        luck
      } = values.values;

      const new_skills = {
        skills_owner,
        front_end,
        back_end,
        computer_science,
        soft_skills,
        luck
      }
      console.log("new_skills object: ", new_skills)

      const {
        stats_owner,
        funds,
        happiness,
        connections,
        energy,
        health,
        current_week
      } = values.values;

      const new_stats = {
        stats_owner,
        funds,
        happiness,
        connections,
        energy,
        health,
        current_week
      }
      console.log("new_stats object: ", new_stats)

      calculateNewCharacter(new_character, new_portfolio, new_skills, new_stats);
    }

    

  })

  // Will move createCharacter to backend later.  But for now, since calculations have
  // to be done on the front end a lot anyway, I'll just do the logic here.
  const calculateNewCharacter = (new_character, new_portfolio, new_skills, new_stats) => {
    console.log("calculating new_stats, ", new_stats.happiness)
    switch(new_character.pet_type) {
    case "dog":
      new_skills.soft_skills += 1
      new_stats.happiness += 20
      new_stats.funds -= 2000
      new_stats.connections += 1
      new_stats.health += 20
      break;
    
    case "Cat":

      new_skills.front_end += 1
      new_stats.happiness += 10
      new_stats.funds -= 500
      new_stats.health += 10
      break;

    default:
      new_skills.luck += 1
    }
    console.log("calculating new_stats, ", new_stats.happiness)
    switch(new_portfolio.career_path) {
    case "Front End":
      new_skills.front_end += 2
      new_skills.back_end += 1
      new_skills.computer_science += 1
      new_skills.soft_skills += 2
      new_skills.luck += 4
      break;

    case "Back End":
      new_skills.front_end += 1
      new_skills.back_end += 2
      new_skills.computer_science += 2
      new_skills.soft_skills += 1
      new_skills.luck += 4
      break;

    default:
      new_skills.front_end += 2
      new_skills.back_end += 2
      new_skills.computer_science += 2
      new_skills.luck += 1
    }
    console.log("calculating new_stats, ", new_stats.happiness)
    switch(new_portfolio.background) {
    case "Accountant":
      new_stats.funds += 10000
      new_stats.happiness -= 10
      new_stats.connections += 2
      new_stats.health -= 10
      break;

    case "Salesperson":
      new_skills.soft_skills += 2
      new_stats.funds += 5000
      new_stats.happiness -= 20
      new_stats.connections += 5
      new_stats.health -= 10
      break;

    case "Artist":
      new_skills.front_end += 1
      new_skills.computer_science -= 1
      new_stats.funds -= 5000
      new_stats.happiness += 10
      new_stats.connections += 2
      new_stats.energy += 10
      new_stats.health += 10
      break;

    case "FryCook":
      new_skills.soft_skills += 1
      new_skills.luck -= 1
      new_stats.funds -= 10000
      new_stats.happiness -= 50
      new_stats.energy -= 20
      new_stats.health -= 20
      break;
    case "Criminal":
      new_skills.back_end += 1
      new_skills.computer_science += 1
      new_skills.luck += 1
      new_stats.funds += 20000
      new_stats.happiness -= 30
      new_stats.connection += 3
      new_stats.energy += 10
      new_stats.health -= 25
      break;
    default:


    }
    console.log("calculating new_stats, ", new_stats.happiness)
    switch(new_portfolio.left_job) {
    case "RageQuit":
      new_stats.happiness -= 10
      new_stats.connections -= 1
      break;
    case "TwoWeeks":
      new_stats.funds += 1000
      new_stats.happiness += 10
      new_stats.current_week += 2
      break;
    case "FourWeeks":
      new_stats.funds += 2000
      new_stats.connections += 1
      new_stats.current_week += 4
      break;
    default:
    }

    switch(new_portfolio.personality) {
    //artsy, nerdy, charismatic, basic
    case "artsy":
      new_skills.front_end += 1
      new_stats.connections += 1
      new_stats.happiness += 10
      break;

    case "nerdy":
      new_skills.back_end += 1
      new_stats.computer_science += 3
      new_stats.connections -= 1
      break;

    case "charismatic":
      new_skills.soft_skills += 2
      new_skills.computer_science -= 1
      new_stats.connections += 2
      break;

    case "basic":
      new_skills.luck += 2
      new_stats.connections += 1
      new_stats.energy += 10
    }

    switch(new_portfolio.education) {
    // art, basketweaving, biology, business, none

    case "art":
      new_skills.front_end += 1
      new_stats.funds -= 10000
      new_stats.connections += 2
      break;

    case "basketweaving":
      new_stats.funds -= 5000
      new_stats.connections += 1
      break;

    case "biology":
      new_skills.computer_science += 1
      new_stats.funds -= 12000
      new_stats.connections += 2
      new_stats.health += 10
      break;

    case "business":
      new_skills.soft_skills += 1
      new_stats.funds -= 10000
      new_stats.connections += 3
      break;

    case "none":
      break;

    default:

    }

    switch(new_portfolio.bootcamp) {
    // none, scammy, good, great
    case "none":
      break;

    case "scammy":
      new_skills.front_end += 2
      new_skills.back_end += 1
      new_stats.funds -= 5000
      new_stats.connections += 2
      new_stats.current_week += 6
      break;

    case "good":
      new_skills.front_end += 3
      new_skills.back_end += 3
      new_skills.computer_science += 1
      new_skills.soft_skills += 2
      new_stats.funds -= 10000
      new_stats.connections += 4
      new_stats.current_week += 16
      break;

    case "great":
      new_skills.front_end += 4
      new_skills.back_end += 4
      new_skills.computer_science += 3
      new_skills.soft_skills += 3
      new_stats.funds -= 16000
      new_stats.connections += 6
      new_stats.current_week += 24
      break;
    default:
    }

    console.log("stats object: ", new_stats)

    createNewCharacter(new_character, new_portfolio, new_skills, new_stats)
    
  }
  const theToggler = () => {
    props.toggleGenerated()
  }

  const createNewCharacter = async (new_character, new_portfolio, new_skills, new_stats) => {
    console.log("POSTing")
    const character_response = await fetch('http://localhost:8000/characters', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(new_character)
    })

    const portfolio_response = await fetch('http://localhost:8000/portfolios', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(new_portfolio)
    })

    const skills_response = await fetch('http://localhost:8000/skills', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(new_skills)
    })

    const stats_response = await fetch('http://localhost:8000/stats', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(new_stats)
    })

  }

  return (
    <div>
      <form id="character-form" onSubmit={handleSubmit}>
        <h2>Create A Character</h2>

        <label htmlFor="character_name">Character name: </label>
        <input 
          type="text" 
          name="character_name" 
          id="character_name" 
          onChange={handleChange}
        />

        <label htmlFor="background">
        One day, something changed for you.  You just
        couldn't do your old job as a(n)
        </label>
        <select 
          name="background" 
          id="background"
          onChange={handleChange}
        >
          <option value="Accountant">Accountant</option>
          <option value="Salesperson">Salesperson</option>
          <option value="Artist">Starving Artist</option>
          <option value="FryCook">Zadonald's Burger Flipper</option>
          <option value="Criminal">Criminal Mastermind</option>
        </select>
        
        <label htmlFor="career_path">
        any longer.  After much soul and web searching,
        you've decided to become a
        </label>
        <select 
          name="career_path" 
          id="career_path"
          onChange={handleChange}
        >
          <option value="FrontEnd">Front End Developer.</option>
          <option value="BackEnd">Back End Developer.</option>
          <option value="FullStack">Full Stack Developer.</option>
        </select>

        <label htmlFor="left_job">
        After settling on your new career path, you
        </label>
        <select 
          name="left_job" 
          id="left_job"
          onChange={handleChange}
        >
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
        <select 
          name="bootcamp" 
          id="bootcamp"
          onChange={handleChange}
        >
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

        <label htmlFor="education">
        You hope your
        </label>

        <select 
          name="education" 
          id="education"
          onChange={handleChange}
        >
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
          Associate's Degree in Biology
          </option>
        </select>

        <label htmlFor="personality">
        and your
        </label>
        <select 
          name="personality" 
          id="personality"
          onChange={handleChange}
        >
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

        <label htmlFor="pet_type">
        somehow come in handy!  Either way, you know
        your pet
        </label>
        <select 
          name="pet_type" 
          id="pet_type"
          onChange={handleChange}
        >
          <option value="dog">dog</option>
          <option value="cat">cat</option>
          <option value="fish">fish</option>
        </select>

        <label htmlFor="pet_name">
        named
        </label>
        <input 
          name="pet_name" 
          type="text" 
          onChange={handleChange}
        />
        <p>will be there to support you!</p>
        <button
          type="submit"
          form="character-form"
          value="Generate"
        >
            Create Character
        </button>
      </form>
      <Link to="/dashboard" onClick={theToggler}>
        <button>
        I'm done making characters, take me to the dashboard!
        </button>
      </Link>
    </ div>
        
  )
}

export default CharacterGenerator;
