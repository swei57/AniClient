import React, { Component } from 'react';
import "./info-page.css"
import SideBar from '../sidebar/sidebar';
import Header from '../header/header';

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
                    <div>a</div>
                </div>
            </div>
		);
	}
}

export default InfoPage;
