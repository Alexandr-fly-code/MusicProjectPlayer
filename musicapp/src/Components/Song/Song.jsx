import React from 'react';
import './Song.css';

const Song = ({src, nameArtist, nameAlbum}) => {
    // console.log(src)
    return (
    //    <div class='content'> 
        <div class="songs-item">
        <figure class="songs-item__figure">
            <img class="songs-item__img" src={src} alt="image"/>
            <figcaption class="songs-item__discription" >
                <p class="songs-item__music-name">{nameArtist}</p>
                <p class="songs-item__singer">{nameAlbum}</p>
            </figcaption>
        </figure>
    </div>
//  </div>
    );
};

export default Song;