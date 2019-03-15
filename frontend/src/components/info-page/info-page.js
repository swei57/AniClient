import React, { Component } from 'react';
import "./info-page.css"
import SideBar from '../sidebar/sidebar';
import Header from '../header/header';
import SearchBar from '../searchbar/searchbar';

class InfoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        var url = 'https://kitsu.io/api/edge/anime/' + id;
        fetch(url).then((response) => {
            if(response.status !== 200) {
                console.log("Fetch Error");
                return;
            }
            response.json().then((data) => {
                this.setState({"data": data.data})
                var epUrl = url + "/episodes";
                this.fetchEpisodes(epUrl, []);
            });
        })
    }
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
                }
            });
            
        });
    }
    displayEpisodes() {
        var html = [];
        if(this.state.episodes) {
            for(var n in this.state.episodes) {
                var ep = this.state.episodes[n];
                console.log(ep);
                if(ep.attributes.airdate == null || new Date(ep.attributes.airdate) > new Date())
                    continue;
                
                if(ep.attributes.thumbnail) {
                    html.push(
                        <div className="ep-preview">
                            <img className="cover-img glass strech-height" src={ep.attributes.thumbnail.original} alt=""/>
                            <div className="ep-name">Episode {+n + 1}</div>
                        </div>
                    )
                }
                else {
                    html.push(
                        <div className="ep-preview">
                            <img className="cover-img glass strech-height" src="http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png" alt=""/>
                            <div className="ep-name">Episode {+n + 1}</div>
                        </div>
                    )
                }
                
            }
        }
        return html;
    }
	render() {
        var display;
        if(this.state.data != undefined) {
            display = <div className="holder">
                <Header />
                <div className="main-box">
                    <SideBar />
                    <div className="contents">
                        <div className="sidebar-container"><SearchBar /></div>
                        <div className="title">{this.state.data.attributes.canonicalTitle}</div>
                        <hr/>
                        <div className="show-info">
                            <div className="short-info">
                                <img className="cover-img" src={this.state.data.attributes.posterImage.original} alt=""/>
                                <div>
                                    <p>Rating: Pending</p>
                                    <p>Popularity: {this.state.data.attributes.popularityRank}</p>
                                </div>
                            </div>
                            <div className="studio-info">
                                <div className="info-header">Information</div>
                                <table className="studio-table">
                                    <tbody>
                                        <tr>
                                            <td>Type:</td>
                                            <td>{this.state.data.attributes.subtype}</td>
                                        </tr>
                                        <tr>
                                            <td>Episodes:</td>
                                            <td>{this.state.data.attributes.episodeCount}</td>
                                        </tr>
                                        <tr>
                                            <td>Status:</td>
                                            <td>{this.state.data.attributes.status.charAt(0).toUpperCase() + this.state.data.attributes.status.slice(1)}</td>
                                        </tr>
                                        <tr>
                                            <td>Aired:</td>
                                            <td>{(new Date(this.state.data.attributes.startDate)).toDateString()}</td>
                                        </tr>
                                        <tr>
                                            <td>Premired:</td>
                                            <td>Winter 2019</td>
                                        </tr>
                                        <tr>
                                            <td>Studios:</td>
                                            <td>Kinema Citrus</td>
                                        </tr>
                                        <tr>
                                            <td>Genres:</td>
                                            <td>Action, Adventure, Drama, Fantasy</td>
                                        </tr>
                                        <tr>
                                            <td>Duration:</td>
                                            <td>{this.state.data.attributes.episodeLength} min</td>
                                        </tr>
                                        <tr>
                                            <td>Popularity:</td>
                                            <td>#297</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="summary">
                                <div className="info-header">Synopsis</div>
                                <div className="summary-text">
                                {this.state.data.attributes.synopsis}
                                </div>

                            </div>
                        </div>
                        <div className="episodes">
                            <div className="title">
                                Episode List
                            </div>
                            <hr/>
                            <div className="slider-box">
                                <label class="switch">
                                    <input type="checkbox" name="no-blur" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            <div className="ep-list">
                                {this.displayEpisodes()}
                            </div>
                        </div>
                    </div>
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
