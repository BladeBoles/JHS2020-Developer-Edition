import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <section>
        <div className="event-card">
          <h3>Week 3</h3>
          <div className="weekly-event">
            <h4>Weekly Event</h4>
            <label htmlFor="">There's a Web Developer meetup this week in your area.  Do you go?</label>
            <select name="" id="focus">
              <option value="yes">Attend</option>
              <option value="no">Play Video Games Instead</option>
            </select>
            <button>Let's Go!</button>
          </div>
          <div className="weekly-choice">
            <h4>Weekly Focus</h4>
            <form action="">
              <label htmlFor="">What will you focus on this week?</label>
              <select name="" id="focus">
                <option value="Coding">Coding Projects (+1 Front End & Back End, -10 Caffeine)</option>
                <option value="Networking">Networking (+1 Connections, +5 Stress)</option>
                <option value="Applications">Job Applications (+1 Luck, -10 Health)</option>
              </select>
              <button>Let's Go!</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
