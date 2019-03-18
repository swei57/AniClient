import React, {Component} from 'react';


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

        </div>

        return(display);
    }

}

export default WatchEpisode;