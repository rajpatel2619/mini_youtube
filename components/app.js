import React from 'react';
import SearchBar from './searchBar';
import youtube from '../apis/youtube';
import VideoList from './videoList';
import VideoDetail from './videoDetail';
import Footer from './footer';
// import Dictaphone from './speech';
class App extends React.Component{
    state={
        videos:[],
        selectVideo : null
    }

componentDidMount(){
    this.onTermSubmit('songs')
}

    onTermSubmit=async (term)=>{
       const response = await youtube.get('/search',{
            params:{
                part:'snippet',
                maxResult:5,
                key:'',
                q:term
            }
        });
        // console.log(response.data.items)
        this.setState({
            videos:response.data.items,
            selectVideo:response.data.items[0]
        })

    };

    onVideoSelect=(video)=>{
        this.setState({selectVideo:video});
    }

    render(){
        return(
            <div className="ui container" >
           {/* <Dictaphone /> */}
               <SearchBar onFormSubmit={this.onTermSubmit} />
               <div className="ui grid">
               <div className="ui stackable row">
                <div className="eleven wide column">
                    <VideoDetail  video={this.state.selectVideo} />
                </div>
                <div className="five wide column">
                    <VideoList  onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                </div>
               </div>
               </div>
               <br/>
                    <Footer />
            </div>
        )
    }
}

export default App;
