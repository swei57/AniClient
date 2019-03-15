import React, { Component } from 'react';
import "./info-page.css"
import SideBar from '../sidebar/sidebar';
import Header from '../header/header';
import SearchBar from '../searchbar/searchbar';

class InfoPage extends Component {
	constructor(props) {
		super(props);
		// const id = this.props.id;
        const id = this.props.match.params.id;
        var url = 'https://kitsu.io/api/edge/anime/' + id;
        fetch(url).then((response) => {
            if(response.status !== 200) {
                console.log("Fetch Error");
                return;
            }
            response.json().then((data) => {
                console.log(data);
            });
        })
    }
	render() {
		return (
			<div className="holder">
                <Header />
                <div className="main-box">
                    <SideBar />
                    <div className="contents">
                        <div className="sidebar-container"><SearchBar /></div>
                        <div className="title">Title</div>
                        <hr/>
                        <div className="show-info">
                            <div className="short-info">
                                <img className="cover-img" src="https://media.kitsu.io/anime/poster_images/1/original.jpg?1431697256" alt=""/>
                                <div>
                                    <p>Rating: 8.40</p>
                                    <p>Members: 100,000</p>
                                </div>
                            </div>
                            <div className="studio-info">
                                Studio Info
                            </div>
                            <div className="summary">
                                Summary
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

export default InfoPage;
