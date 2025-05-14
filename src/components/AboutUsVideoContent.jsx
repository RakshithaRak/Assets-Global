import React, { useState } from 'react';
import './AboutUsVideoContent.scss';


const videos = [
    { video: `https://www.youtube.com/embed/V8vmHd2XvT8?autoplay=1&mute=1`, desc: 'Corporate Video' },
    {
        video: `https://www.youtube.com/embed/htQWQoYrTmA?mute=1`, desc: " Home Buyer's Path"
    },
    { video: `https://www.youtube.com/embed/WY8-LA9Pzq8?mute=1`, desc: ' Word from Our CEO' },
    { video: `https://www.youtube.com/embed/QEfHdtm8ctQ?mute=1`, desc: 'Assets Global Upcoming 2024 Message' },
];

const VideoContent = () => {

    return (
        <div className="main-video-container">
            <div className="video-content">
                {videos.map((video, idx) => (
                    <div key={idx} className="video-item">
                        {/* <video controls autoPlay width={300} height={220}>
                            <source src={video.video} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video> */}

                        <iframe className='vidoe-item-video' src={video.video} frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="YouTube video player"  ></iframe>
                        <p>{video.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoContent;
