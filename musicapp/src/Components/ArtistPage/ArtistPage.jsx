import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './ArtistPage.css';
import FlipMove from "react-flip-move";


const ArtistPage = ({artistsData}) => {
    return (
        <FlipMove>
             <div className="content">
                {/* <Card artist="Gorillaz"
                      pic="https://lastfm-img2.akamaized.net/i/u/174s/36422c10f46150b432a7d0ddbc87c5d3.png"
                      alt="artist pic"
                      link="https://www.last.fm/music/Gorillaz"
                /> */}
                
                {artistsData.map(el => <Card url={el.image[2]['#text']} 
                 name={el.name} listeners={`Listeners ${(+el.listeners).toLocaleString()}`} 
                 key={el.name} 
                 />)} 
                 
        </div>
        </FlipMove>
    );
};

export default ArtistPage;

// class ArtistPage extends Component {
//     render() {
//         const {artistsData} = this.state; 
//         return (
//             <div className="content">
//                 {/* <Card artist="Gorillaz"
//                       pic="https://lastfm-img2.akamaized.net/i/u/174s/36422c10f46150b432a7d0ddbc87c5d3.png"
//                       alt="artist pic"
//                       link="https://www.last.fm/music/Gorillaz"
//                 /> */}
//                 {artistsData.map(el => <Card url={el.image[2]['#text']} 
//                 name={el.name} listeners={el.listeners}
//                 key={el.name}
//                 />)}
//             </div>
//         );
//     }
// }

// export default ArtistPage;

