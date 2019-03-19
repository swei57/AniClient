import React, {Component} from 'react';
import {YouTubePlayer} from 'react-video-players';
import './watch-episode.css';

class WatchEpisode extends Component{

    constructor(props){
        super(props);
        this.state = {
            showTitle: this.props.showTitle,
            episodeDetails: this.props.episodeDetails, // placeholder
        }
        console.log(this.state);
    }

    componentDidUpdate(prevProps)
    {
        if(this.props.episodeDetails != prevProps.episodeDetails)
        {
            this.setState({
                showTitle: this.props.showTitle,
                publisher: this.props.publisher,
                episodeDetails: this.props.episodeDetails
            });
        }
    }

    render() {
        var display;
        display = 
        <div>
            <div className="title">{this.state.showTitle}: Episode {this.state.episodeDetails.attributes.relativeNumber} - {this.state.episodeDetails.attributes.canonicalTitle}</div>
            <hr></hr>
            <div class='episode-content'>
                <div class='video'>
                    {/* <video className="media-video" controls> */}
                        {/* pull our video links here */}   
                    {/* </video> */}
                    {/* https://www.youtube.com/watch?v=Pnua0NO0McM */}
                    <YouTubePlayer videoId="Pnua0NO0McM" />
                </div>

                <div class='episode-details'>
                    Rating:<br/>
                    <div class='synopsis'>
                    {this.state.episodeDetails.attributes.synopsis}
                    </div><br/>
                    Subtitles:
                    <br/><br/>
                    Publisher:
                    <br/><br/>
                    Tags:<br/><br/>
                    <div class='subtext'>
                    </div>
                        <div>
                        <label class="switch">
                            <input type="checkbox" name="no-blur" />
                            <span class="slider round"></span>
                        </label>
                        <div className="show-label">
                            Autoplay
                        </div>
                        </div>

                </div>
            </div>
        </div>

        return(display);
    }

}

export default WatchEpisode;