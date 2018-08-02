import React from 'react';
import {NavLink} from 'react-router-dom'
// import PropTypes from 'prop-types';
import './Chart.css';

const Chart = (props) => {
    return (
        <div className="chart">
            <ul className="chart-list">
                <li >
                <NavLink exact to='/' className="chart-list__item" activeClassName='select'>
                Artists
                </NavLink>
                </li>
                
                <li >
                <NavLink to='/albums' className="chart-list__item" activeClassName='select'>
                Albums
                </NavLink>
                </li>
                
                <li >
                <NavLink to='/song' className="chart-list__item" activeClassName='select'>
                Songs
                </NavLink>
                </li>
            </ul>
        </div>
    );
};

Chart.propTypes = {};
Chart.defaultProps = {};

export default Chart;
