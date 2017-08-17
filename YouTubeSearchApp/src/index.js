import _ from 'lodash';
import React,{ Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';


const API_KEY = 'AIzaSyCMSvx_XRU7sEEFJPlqTH4zvfnLeiVLmd4';

YTSearch({key:API_KEY ,term:'surfboards'},function(videos) {

            console.log(videos);
            //this.setState( {videos:videos} );

});




class App extends Component{

 
    constructor(props){
        super(props);

        this.state = {
            videos : [] ,
            selectedVideo:null
        };

        this.videoSearch('surfboards');

    }

    videoSearch(term){

        YTSearch({key:API_KEY ,term:term},(videos) => {

            this.setState(
                 {
                     videos:videos,
                     selectedVideo:videos[0]
                 }
            );

        });

    }

    render(){

       var that = this;
        //search every .3 seconds.Library from lodash
        const videoSearch = _.debounce(function(term){
            that.videoSearch(term);
        },300);
        //can do it this way with ES6 Fat Arrow no need for context issues .
        //const videoSearch = _.debounce((term) => { this.videoSearch(term) },300);
        
        return (
           <div>
              
              <SearchBar onSearchTermChange={videoSearch} />             
              {/** <SearchBar onSearchTermChange={(term) => this.videoSearch(term)}/> */}
              <VideoDetail video={this.state.selectedVideo}/>

              <VideoList 
                 onVideoSelect={  function onVideoSelect(selectedVideo){
                     that.setState({selectedVideo:selectedVideo})  }
                 } 
                 videos={this.state.videos} />

              {/**
              Can do it with ES6 as well   
              <VideoList 
                 onVideoSelect={ (selectedVideo) => this.setState({selectedVideo:selectedVideo})}
                 videos={this.state.videos} /> */}
              
              {/** function selectedVideo(selectedVideo){this.setState({selectedVideo:selectedVideo})} */}
              {/** onVideoSelect={ (selectedVideo) => this.setState({selectedVideo:selectedVideo})} */}

           </div>
        );
    }

}



ReactDom.render(<App />,document.querySelector('.container'));//create instance of the component .