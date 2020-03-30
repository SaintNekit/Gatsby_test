import React from 'react'
import H1 from '../components/textHeaders'
import {Link} from 'gatsby'

const HomePage = () => {
  return (
  <div style={{ color: "lightblack"}}>
    <H1 text="This is our home for now" />
    <H1 text="Not the best one, but the worst also"/>
    <p>What are we doing here???</p>
    <Link>Return to main page.</Link>
  </div>
  )
}

export default HomePage
