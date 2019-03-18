import React, { Component } from 'react';
import "./watch-episode.css";
import SideBar from '../sidebar/sidebar';
import Header from '../header/header';
import SearchBar from '../searchbar/searchbar';

class WatchEpisode extends Component{

    constructor(props){
        super(props);
        this.state={
            title:'',
            episodeNo: 0,
            episodeDetails: {attributes: {canonicalTitle: ''}}, // There has to be a better way to do this.
            episodes: []
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id; // show id from page route
        var url = 'https://kitsu.io/api/edge/anime/' + id;

        // Get and set both the show title and the episode number
        fetch(url).then((response) => {
            if(response.status !== 200) {
                console.log("Fetch Error");
                return;
            }
            response.json().then((data) => {
                this.setState({
                    title: data.data.attributes.canonicalTitle,
                    episodeNo: this.props.match.params.epNo
                });
                var epUrl = url + "/episodes";
                this.fetchEpisodes(epUrl, []);
            });
        });
    }

    // Fetch the information for all the episodes including this one.
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
                    this.setState({ // save the details for this particular episode
                        episodeDetails: array[this.state.episodeNo-1],
                        episodes: array
                    });
                }
            });
            
        });
    }

    render() {
        return(
            <h3>{this.state.title}: Episode {this.state.episodeNo} - {this.state.episodeDetails.attributes.canonicalTitle}</h3>
        );
    }

}

export default WatchEpisode;