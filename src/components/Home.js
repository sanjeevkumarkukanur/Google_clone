import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps'
import { Avatar } from '@material-ui/core'
import SearchPage from './SearchPage'

function Home() {
    return (
        <div className='home'>
            <div className="home__header">
                <div className="home__headingLift">
                    <Link to='/about' >About</Link>
                    <Link to='/store' >Store</Link>
                </div>
                <div className="home__headingRight">
                    <Link to='/gmail' >Gmail</Link>
                    <Link to='/images' >Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>  

            <div className="home__body">
                <img src='https://uwaterloo.ca/events/sites/ca.events/files/styles/wide-body-750px-wide/public/uploads/images/google-logo.jpg?itok=abYgzODd' alt='icon' />
                </div> 
                <div className="home__inputontainer">
                    <SearchPage />
                </div>    
        </div>
    )
}

export default Home
