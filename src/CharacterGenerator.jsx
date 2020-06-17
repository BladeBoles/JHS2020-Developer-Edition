import React, { useState, useEffect } from 'react'
import useCustomForm from "./CustomForm"

const initialValues = {
  // new_character: {}
  character_owner: 1,
  character_name: "New Character",
  character_avatar: "https://www.placecage.com/100/100",
  pet_name: "Killer",
  pet_type: "Fish",
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


const CharacterGenerator = () => {

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = useCustomForm({
    initialValues,
    onSubmit: values => console.log({ values })
  })

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
          Generate Character!
        </button>

        

      </form>
    </ div>
        
  )
}

export default CharacterGenerator;
