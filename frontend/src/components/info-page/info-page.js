import React, { Component } from 'react';
import "./info-page.css"
import SideBar from '../sidebar/sidebar';
import Header from '../header/header';
import SearchBar from '../searchbar/searchbar';
import {Redirect} from 'react-router-dom';

import ShowInfo from './show-info/show-info';
import WatchEpisode from './watch-episode/watch-episode';
import ScrollToTop from '../utils/scroll-to-top';

class InfoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "blur": true,
            showId: 0,
            redirect: false,
            epToSee: 0,
            episodeDetails: []
        };
    }

    // Here we take the showID from the url to fetch the show's information
    // and then call to collect episode information
    componentDidMount() {
        const id = this.props.match.params.id;
        //https://api.jikan.moe/v3/anime/id/request/parameter
        var url = 'https://api.jikan.moe/v3/anime/' + id;
        fetch(url).then((response) => {
            if(response.status !== 200) {
                console.log("Fetch Error");
                return;
            }
            response.json().then((data) => {
                this.setState({"data": data.data, showId: id});
                var epUrl = url + "/episodes";
                this.fetchEpisodes(epUrl, []);
            });
        })
    }

    // fetch episode information and store in local 'episodes' state array
    fetchEpisodes(url, array) {
        fetch(url).then((response) => {
            if(response.status !== 200) {
                console.log("Could not fetch episode");
                return;
            }
            response.json().then((data) => {
                array = array.concat(data.data);
                if(data.links.next && array.length < 30) {
                    this.fetchEpisodes(data.links.next, array);
                }
                else {
                    this.setState({"episodes": array});
                    console.log(this.state.episodes);

                    // If the specify the episode to see in the route to this page, set this variable
                    // so we can display the video player immediately.
                    if(this.props.match.params.epNo >= 1 && this.props.match.params.epNo <= this.state.episodes.length)
                    {
                        this.setState({epToSee: this.props.match.params.epNo});
                        this.setState({episodeDetails: this.state.episodes[this.state.epToSee-1]});
                    }
                }
            });

        
            
        });
    }
    goToEp = (a, b) => {
        this.props.history.push("./" + this.props.match.params.id + "/" + b);

    }
    swapBlur = ()=> {
        this.setState({"blur": !this.state.blur});
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            console.log(this.state.epToSee);
        return <Redirect to={`/show/${this.state.showId}/${this.state.epToSee}`} />
        }
    }
    watchEpisode = (e) => {
        this.setState({
            epToSee: e.target.id,
            redirect: true,
        });
    }

    displayEpisodes = () => {
        var html = [];
        if(this.state.episodes) {
            for(var n in this.state.episodes) { // iterate over all the episodes
                var ep = this.state.episodes[n];
                console.log(ep);
                if(ep.attributes.airdate == null || new Date(ep.attributes.airdate) > new Date())
                    continue; // ignore episodes that have not yet aired
                
                // Display blurred/unblurred thumbnails for episodes
                if(ep.attributes.thumbnail) {
                    if(this.state.blur) {
                        html.push(
                            <div className="ep-preview">
                                <img className="cover-img glass strech-height" src={ep.attributes.thumbnail.original} id={ep.attributes.relativeNumber} 
                                onClick={this.watchEpisode} alt=""/>
                                <div className="ep-name">{+n + 1}</div>
                            </div>
                        )
                    } else {
                        html.push(
                            <div className="ep-preview">
                                <img className="cover-img strech-height" src={ep.attributes.thumbnail.original} id={ep.attributes.relativeNumber} 
                                onClick={this.watchEpisode} alt=""/>
                                <div className="ep-name">{+n + 1}</div>
                            </div>
                        )
                    }
                    
                } else {
                    if(this.state.blur) {
                        html.push(
                            <div className="ep-preview">
                                <img className="cover-img glass strech-height" src="http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png" 
                                id={ep.attributes.relativeNumber} onClick={this.watchEpisode} alt=""/>
                                <div className="ep-name">{+n + 1}</div>
                            </div>
                        )
                    } else {
                        html.push(
                            <div className="ep-preview">
                                <img className="cover-img strech-height" src="http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png" 
                                id={ep.attributes.relativeNumber} onClick={this.watchEpisode} alt=""/>
                                <div className="ep-name">{+n + 1}</div>
                            </div>
                        )
                    }
                }
                let x = n;
                html.push(
                    <div className="ep-preview" onClick={(a,b = x) => {this.goToEp(a,b);}}>
                        {epData}
                        <div className="ep-name">{+n + 1}</div>
                    </div>
                );
                
            }
        }
        return html;
    }
	render() {
        var display;
        if(this.state.data !== undefined)
        {
        display = <div className="holder">
                <Header />
                <div className="main-box">
                <SideBar />
                <div className="contents">
                <div className="sidebar-container"><SearchBar /></div>

                {this.renderRedirect()}

                { (this.state.epToSee == 0) ? <ShowInfo showData={this.state.data}/> : 
                <WatchEpisode showTitle={this.state.data.attributes.canonicalTitle} 
                episodeDetails={this.state.episodes[this.state.epToSee -1]}/> }

                        <div className="episodes">
                            <div className="title">
                                Episode List
                            </div>
                            <hr/>
                            <div className="slider-box">
                                <label class="switch">
                                    <input type="checkbox" name="no-blur" />
                                    <span class="slider round" onClick={this.swapBlur}></span>
                                </label>
                                <div className="show-label">
                                    Toggle blur
                                </div>
                            </div>
                            <div className="ep-list">
                                {this.displayEpisodes()}
                            </div>
                        </div>
                    </div>
                    <ScrollToTop/>
                </div>
            </div>
        }
        else {
            display = <div>Loading data, please hold</div>
        }
		return (
            display
		);
    }
}

export default InfoPage;
