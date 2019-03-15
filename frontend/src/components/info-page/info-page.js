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
                console.log(data);
                this.setState({"data": data.data});
                // this.setState({"title": data.data.attributes.canonicalTitle})
                // console.log(this.state.data.data.attributes.canonicalTitle);
            });
        })
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
                                            <td>TV</td>
                                        </tr>
                                        <tr>
                                            <td>Episodes:</td>
                                            <td>{this.state.data.attributes.episodeCount}</td>
                                        </tr>
                                        <tr>
                                            <td>Status:</td>
                                            <td>{this.state.data.attributes.status}</td>
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
