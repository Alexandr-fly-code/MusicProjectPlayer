import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Components/Sidebar/Sidebar';
import Search from './Components/Search/Search';
import Card from "./Components/Card/Card";
import './App.css';
import ArtistPage from "./Components/ArtistPage/ArtistPage";
import SongPage from './Components/SongPage/SongPage';
import AlbumPage from './Components/AlbumPage/AlbumPage';
import fetchData from './helpers/fetch';
import { Switch, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner'

const propTypes = {
    
};


class App extends Component {

    state = {
        getSong: [],
        artistsData: [],
        albumData: [],
        searchValue: '',
        isLoader: true,
    }

    searchData = (e) => {
        e.preventDefault();
        if (this.state.searchValue !== ''){
        fetchData(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${this.state.searchValue}&api_key=412e51e107155c7ffabd155a02371cbd&format=json`)
        .then(({results}) => {
            console.log(results)
            this.setState({
                artistsData: results.artistmatches.artist,
            })
        })
       

        fetchData(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${this.state.searchValue}&api_key=412e51e107155c7ffabd155a02371cbd&format=json`)
        .then(({results}) => {
            console.log(results)
            this.setState({
                albumData: results.albummatches.album,
            })
        })
        
        fetchData(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${this.state.searchValue}&api_key=412e51e107155c7ffabd155a02371cbd&format=json`)
        .then(({results}) => {
            console.log(results)
            this.setState({
                getSong: results.trackmatches.track,
            })
        })
    }else {
        alert('Nothing was entered in the search')
    }
    
}


    componentDidMount () {
        fetchData('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=e900a41307805d11c3527e8aeebf5d4b&limit=48&format=json')
        .then(data => {
            this.setState({
                getSong: data.tracks.track,
            })
        })
        fetchData('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=e900a41307805d11c3527e8aeebf5d4b&limit=48&format=json')
        .then(data => {
            this.setState({     
             artistsData: data.artists.artist.sort(function(a,b){return +(b.listeners - a.listeners)}), 
             isLoader: false,   
            })
        })
        fetchData('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&api_key=e900a41307805d11c3527e8aeebf5d4b&limit=48&format=json')
        .then(data => {
            this.setState({
                    albumData: data.albums.album,
            })
        })

    }

    onChange = (e) => {
        const value = e.target.value.toLowerCase();
        const name = e.target.name;
        this.setState({
            [name] : value,
        })
    }
        
  
    render() {
        const {getSong, artistsData, albumData, searchValue, isLoader} = this.state;
        return (
            <div className='wrapper'>
            <div className="container">
                <Sidebar/>
                <div className='main'>
                    <Search onChange={this.onChange} value={searchValue} onSubmit={this.searchData}/>
                    {isLoader ? 
                    <div className='loader'>
                    <Loader
                        type="Audio"
                        color="var(--red)"
                        height="100"	
                        width="100"
                    />    
                    </div>
                    :
                    <Switch>
                        <Route exact path='/' render={() => <ArtistPage artistsData={artistsData}/>}/>
                        <Route path='/albums' render={() => <AlbumPage albumData={albumData}/>}/>
                        <Route path='/song' render={() => <SongPage getSong={getSong}/>}/>
                        </Switch>                    
                        }
                </div>
            </div>
        </div>
        );
    }
}


App.propTypes = propTypes;


export default App;


// const App = () => {
//     return (
//         <div className='wrapper'>
//             <div className="container">
//                 <Sidebar/>
//                 <div className='main'>
//                     <Search/>
//                     <ArtistPage/>
//                     <SongPage/>
//                     <AlbumPage/>
//                 </div>
//             </div>
//         </div>
//     )
// };

// export default App;

        // const sortArtists = data.artists.artist.sort(function(a,b){
                    //                 return +(b.listeners - a.listeners)
                    //             })
                    //             // console.log(sortArtists);
                    //             // console.log(sortArtists);


                    // // fetchData('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json')
        // axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json')
        // .then(({status, data}) => {
        //     // console.log(data.tracks.track);
        //     if (status === 200){
        //         this.setState({
        //             getSong: data.tracks.track,
        //         })
        //     }
        // })


        // axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json')
        //     .then(({status, data}) => {
        //         // console.log(data.artists.artist);
        //         if (status === 200) {
        //             const sortArtists = data.artists.artist.sort(function(a,b){
        //                 return +(b.listeners - a.listeners)
        //             })
        //             // console.log(sortArtists);
        //             // console.log(sortArtists);
        //             this.setState({
        //                 artistsData: sortArtists,
        //             })
        //         }
        //     })
        //     axios.get('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json')
        // .then(({status, data}) => {
        //     console.log(data)
        //     if (status === 200){
        //         this.setState({
        //             albumData: data.albums.album,
        //         })
        //     }
        // })
        // }
                       