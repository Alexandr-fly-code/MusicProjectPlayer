import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import cardDefault from './orig.png'

const Card = ({name, pic, alt, link, url, listeners}) => {
    return (
        <div className="artist-card">
            <figure>
                <img src={url !== '' ? url: cardDefault} alt={alt} className="artist-card__img"/>
                <figcaption>
                    <p className="artist-card__name">{name}</p>
                    {/*<p className="artist-card__number-albums">5 albums</p>*/}
                    <a href={link} className="artist-card__link">{listeners}</a>
                </figcaption>
            </figure>
        </div>
    );
};

Card.propTypes = {};
Card.defaultProps = {};

export default Card;
