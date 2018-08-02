import React from 'react';
import {NavLink} from 'react-router-dom'
// import PropTypes from 'prop-types';
import './Chart.css';

const Chart = (props) => {
    return (
        <div className="chart">
            <ul className="chart-list">
                <li className="chart-list__item">
                <NavLink to='/'>
                Artists
                </NavLink>
                </li>
                
                <li className="chart-list__item">
                <NavLink to='/albums'>
                Albums
                </NavLink>
                </li>
                
                <li className="chart-list__item">
                <NavLink to='/song'>
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
