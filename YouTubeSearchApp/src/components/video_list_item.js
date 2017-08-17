import React from 'react';

const VideoListItem = (props) => {

    const onVideoSelect = props.onVideoSelect;
    const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    

    
    {/**onVideoSelect is a function  and we pass it the video object*/}
    return (
        <li className="list-group-item" onClick={ () => onVideoSelect(video)}>

          <div className="video-list media">
             <div className="media-left">
                <img className="media-object" src={imageUrl}/>

             </div>

             <div className="media-body">
                 <div className="media-heading">{title}</div>
             </div>

          </div>
          
        </li>
    );
};


export default VideoListItem;