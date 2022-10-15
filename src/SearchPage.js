import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'
import image from './airbnb.jpg'

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage__info'>
            <p>62 stays . 26 august to  august . 2 guests</p>
            <h1>Stays Nearby</h1>
            <Button variant='outlined'>Cancellation Flexibility</Button>
            <Button variant='outlined'>Type of place</Button>
            <Button variant='outlined'>Price</Button>
            <Button variant='outlined'>Rooms and beds</Button>
            <Button variant='outlined'>More filters</Button>
        </div> 
        <SearchResult img={image} 
            location="Private room in center London"
            title="Stay in this spacious Edwadian house"
            description = "1 guest . 1 bedroom . 1 bed . 1.5 shared bedrooms . Wifi . Kitchen . Free Parking . Washing Machine" star={4.73} price = "$30/night" total="S117 total" />


        <SearchResult img={image} 
                    location="Private room in center London"
                    title="Stay in this spacious Edwadian house"
                    description = "1 guest . 1 bedroom . 1 bed . 1.5 shared bedrooms . Wifi . Kitchen . Free Parking . Washing Machine" star={4.73} price = "$30/night" total="S117 total" />


        <SearchResult img={image} 
                    location="Private room in center London"
                    title="Stay in this spacious Edwadian house"
                    description = "1 guest . 1 bedroom . 1 bed . 1.5 shared bedrooms . Wifi . Kitchen . Free Parking . Washing Machine" star={4.73} price = "$30/night" total="S117 total" />
    </div>
  )
}

export default SearchPage