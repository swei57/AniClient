import React, {Component} from 'react';
import {YouTubePlayer} from 'react-video-players';
import {VideoPlayer} from 'react-video-players';
import './watch-episode.css';

const EPISODES = [
    {
      episode: "https://a5ulrgmlbd.playercdn.net/187/0/vNo6e1glDK2Ys4uRLl3sNw/1553066044/190126/697FZKF1TD42QQJOGA0NH.mp4",
      id: 1
    },
    {
        episode: "https://x29mqqi40l.playercdn.net/187/0/Z5bqg6Jp_GlAQyGOmqErqA/1553066046/190126/696FZKF0II9Q8BIHKDMTG.mp4",
        id: 2
      },
      {
        episode: "https://ivmgn729ak.playercdn.net/187/0/sxhVE5J0xDJoG-7eTHw0pA/1553066048/190126/697FZKF1AK84WNBGTHR0F.mp4",
        id: 3
      },
      {
        episode: "https://vxj5ev7tvh.playercdn.net/187/5/cL_BYuuwf3c6TiX7q9mvgw/1553066050/190126/697FZKF2BWMKF5T1TJGXP.mp4",
        id: 4
      },
      {
        episode: "https://ra7l5qae0h.playercdn.net/187/0/wutupM4hAmo07HkM7kOsmg/1553066053/190126/700FZKF709IOA8MW00XZE.mp4",
        id: 5
      },
      {
        episode: "https://sb7wn80n6o.playercdn.net/187/0/ka_TdeVq9LRapNOOZQBCyA/1553066054/190126/404FZK2UGO9EEYDLK999J.mp4",
        id: 6
      },
      {
        episode: "https://m39u847aku.playercdn.net/187/0/D6zAiYwL-uS1ToX2q0C9gg/1553066056/190126/702FZKFA4Y49XSJ4WP7YX.mp4",
        id: 7
      },
      {
        episode: "https://gquex6bhas.playercdn.net/187/0/nh7SGVg0LkTUixFHpsARzw/1553066058/190126/697FZKF1AJSG1LSNAVQMZ.mp4",
        id: 8
      },
      {
        episode: "https://36m82krw6d.playercdn.net/187/0/WsySKI7f8K5kv__-zdiQ1g/1553066061/190126/698FZKF33O75KGMTQRRGU.mp4",
        id: 9
      },
      {
        episode: "https://vxj5ev7tvh.playercdn.net/187/2/YH91lPaaXPS14YxXeQ_o3w/1553066063/190126/697FZKF2LLEUSOVZHHGE7.mp4",
        id: 10
      },
      {
        episode: "https://2xawvx68bu.playercdn.net/187/0/gmwtUclVnIFerWeLQSEdZg/1553066065/190126/704FZKFCQE5W2YZQ7PTBL.mp4",
        id: 11
      },
      {
        episode: "https://fbj31jz2y8.playercdn.net/187/0/pFLGYXZC3-EmOfgrhD5uSA/1553066067/190126/702FZKF8U1MSWF9XJ0SYQ.mp4",
        id: 12
      },
      {
        episode: "https://rkm3zoj62s.playercdn.net/187/0/lUxYisUUagP52nNxiKJ4uA/1553066069/190126/696FZKF0RYYF1J7PGOVEA.mp4",
        id: 13
      },
      {
        episode: "https://vxj5ev7tvh.playercdn.net/187/2/oNOmi7BCx1Lwjs2hR5resw/1553066071/190126/697FZKF1A0X9SBADZYMNB.mp4",
        id: 14
      },
      {
        episode: "https://tfoi1lxqdv.playercdn.net/187/0/BuLblxL3IPLTiER-8X-zoQ/1553066073/190126/697FZKF22B2MGSNMKVQLV.mp4",
        id: 15
      },
      {
        episode: "https://vxj5ev7tvh.playercdn.net/187/11/ps0WE8iZOXjW1iRBMvqt5A/1553066075/190126/699FZKF4XA2Y2OMVWA5UM.mp4",
        id: 16 
      }
]

class WatchEpisode extends Component{

    constructor(props){
        super(props);
        this.state = {
            showTitle: this.props.showTitle,
            episodeDetails: this.props.episodeDetails, // placeholder
            episodes: EPISODES //load our links in
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
                    <video className="video"  name="media" src={this.state.episodes[this.state.episodeDetails.attributes.relativeNumber]} type="video/mp4"controls></video>
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