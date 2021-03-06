import React from 'react';
import PropTypes from 'prop-types';
import './SongPage.css';
import Song from '../Song/Song';
import axios from 'axios';
import './SongPage.css';
import FlipMove from "react-flip-move";

const SongPage = ({getSong}) => {
    return (
        <FlipMove>
        <div class='content'>
            
           {getSong.map(el => <Song src={el.image[1]['#text']} nameArtist={el.artist.name} nameAlbum={el.name}/>)}
        </div>
        </FlipMove>

    );
}

export default SongPage;


// class SongPage extends Component {
//     render() {
//         const {getSong} = this.state;
//         // console.log(this.state.getSong);
//         return (
//        <div>
//            {getSong.map(el => <Song src={el.image[1]['#text']} nameArtist={el.artist.name} nameAlbum={el.name}/>)}
//        </div>
//         )
//     }
// }


// SongPage.propTypes = propTypes;


// export default SongPage;
