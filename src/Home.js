import Card from './Card'
import React from 'react'
import Banner from './Banner'
import './Home.css'
import pic from './airbnb.jpg'

function Home() {
  return (
    <div className='home'>
        <Banner />

        <div className='home__section'>
          <Card src={pic} 
            title='online experiences'
            description="unique activities we can do together, led by a world of hosts."/>
          <Card src={pic} 
            title="unique stays"
            description="spaces that are more than just a place to sleep"/>
          <Card src={pic}
            title = "entire homes"
            description="comfortabele private places, with room for friends and family"/>

        </div>
        <div className='home__section'>
          <Card src={pic} 
            title='online experiences'
            description="unique activities we can do together, led by a world of hosts."
            price="$70/night"/>
          <Card src={pic} 
            title="unique stays"
            description="spaces that are more than just a place to sleep"
            price="$120/night"/>
          <Card src={pic}
            title = "entire homes"
            description="comfortabele private places, with room for friends and family"
            price="$350/night"/>


        </div>
    </div>
  )
}

export default Home