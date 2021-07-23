import React from 'react';
import './SearchPage.css';
import { useStateValue} from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const  { data }  = useGoogleSearch(term);


    // const data= Response;

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                <img className='searchPage__logo'
                 src='https://uwaterloo.ca/events/sites/ca.events/files/styles/wide-body-750px-wide/public/uploads/images/google-logo.jpg?itok=abYgzODd' alt='icon' />
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons />

                    <div className="searchPage__options">
                        <div className="searchpage__optionsleft">
                            <div className="searchpage__option">
                            <SearchIcon />
                            <Link to="/all">All</Link> 
                            </div>
                            <div className="searchpage__option">
                            <DescriptionIcon />
                            <Link to="/news">News</Link> 
                            </div>
                            <div className="searchpage__option">
                            <ImageIcon />
                            <Link to="/images">Images</Link> 
                            </div>
                            <div className="searchpage__option">
                            <LocalOfferIcon />
                            <Link to="/shopping">Shopping</Link> 
                            </div>
                            <div className="searchpage__option">
                            <RoomIcon />
                            <Link to="/maps">Maps</Link> 
                            </div>
                            <div className="searchpage__option">
                            <MoreVertIcon />
                            <Link to="/more">More</Link> 
                            </div> 
                        </div>
                        <div className="searchpage__optionRight">
                            <div className="searchpage__option">
                            <Link to="/settings">Settings</Link> 
                            </div> 
                            <div className="searchpage__option">
                            <Link to="/tool">Tools</Link> 
                            </div> 
                            </div>
                    </div>

                </div>
                
            </div>
            {term && (
                <div className="searchPage__results">
                    <p className="searchPage__resultsCount">
                        About {data?.searchInformation.
                        formattedTotalResults} results ({data?.searchInformation.
                            formattedSeacrhTime} seconds) for {term}
                    </p>
                    {data?.items.map(item =>(
                        <div className="searchPage_result">
                            <a className="searchPage__resultLink"
                            href={item.link}>
                                {item.pagemap?.cse_image?.
                                length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img className='searchPage__resultImage'
                                    src={
                                        item.pagemap?.
                                        cse_image[0]?.src
                                    }
                                    alt=''
                                    />
                                )}
                            {item.displayLink} 
                            </a>
                            < a className="search__resultTitle" 
                            href ={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="search__resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
            
        </div>
    )
}

export default SearchPage;
