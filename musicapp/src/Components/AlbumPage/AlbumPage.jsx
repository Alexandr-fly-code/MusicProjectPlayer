import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Album from '../Album/Album';
import styles from './AlbumPage.css';


const AlbumPage = ({albumData}) => {
    return (
        <div className='content'>
                {albumData.map(el => <Album src={el.image[2]['#text']} album={el.name} artist={el.artist}/>)}            
        </div>
    );
}

export default AlbumPage;


// class AlbumPage extends Component {
//     render() {
//         const {albumData} = this.state;
//     console.log(albumData);
//         return (
//             <div>
//                 {albumData.map(el => <Album src={el.image[1]['#text']} album={el.name} artist={el.artist.name}/>)}
//             </div>
//         );
//     }
// }

// AlbumPage.propTypes = {

// };

// export default AlbumPage;