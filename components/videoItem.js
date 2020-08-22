import React from 'react';
import './videoItem.css';
const VideoItem=({video,onVideoSelect})=>{
    return(
        <div onClick={()=>onVideoSelect(video)} className="video-item item ">
            <img alt="youtube video" className="ui image " src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
                <div className="description">
                    {video.snippet.channelTitle}
                </div>           
            </div>
        </div>
    )
}

export default VideoItem;