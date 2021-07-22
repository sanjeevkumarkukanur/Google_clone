import React from 'react';
import './SearchPage.css';
import { useStateValue} from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'
import { Link } from 'react-router-dom';
import Search from './Search';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    // const  { data }  = useGoogleSearch(term);


    const data= Response;

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                <img className='searchPage__logo'
                 src='https://uwaterloo.ca/events/sites/ca.events/files/styles/wide-body-750px-wide/public/uploads/images/google-logo.jpg?itok=abYgzODd' alt='icon' />
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons />
                </div>
                
            </div>
            <div className="searchPage__results">

            </div>
            
        </div>
    )
}

export default SearchPage;
