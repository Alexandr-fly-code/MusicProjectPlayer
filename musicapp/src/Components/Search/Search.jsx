import React from 'react';
// import PropTypes from 'prop-types';
import './Search.css';
import Chart from "../Chart/Chart";

const Search = ({onChange, value, onSubmit}) => {
    return (
        
        <div className='search'>
    {console.log(this.props)}

            <form action="#" method="post" className="search__form" onSubmit={onSubmit}>
                <input type="text" className="search__input" placeholder="Search music" value={value} onChange={onChange} name='searchValue'/>
                <input type="submit" value="search" className="search__btn" />
            </form>
            <Chart/>
        </div>
    );
};

Search.propTypes = {};
Search.defaultProps = {};

export default Search;
