import React, { Component } from 'react';
import "./login.css";
import { Redirect } from 'react-router-dom';


var styles = [
    {
        name: "Hifumi",
        url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4d99d831-9f85-4199-928a-397a43693f01/dcmtozq-9549afd7-cd66-41b0-a575-7a651087ac95.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRkOTlkODMxLTlmODUtNDE5OS05MjhhLTM5N2E0MzY5M2YwMVwvZGNtdG96cS05NTQ5YWZkNy1jZDY2LTQxYjAtYTU3NS03YTY1MTA4N2FjOTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aF7kFTM2K8v_O2Uk_svCS6caTua5MtrRC2zBcAb1344",
        background: "#3e3649",
        button: "#d9703a",
        buttonHover: "#a8400b"
    },
    {
        name: "Ahagon",
        url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/4d99d831-9f85-4199-928a-397a43693f01/dcmtohf-dc7a305d-ccde-4dc4-b138-f05417e2487d.png/v1/crop/w_156,h_250,x_0,y_0,scl_0.47272727272727,strp/chibi_umiko_ahagon_render_by_overpowered99_dcmtohf-250t.png",
        background: "#303030",
        button: "#d9703a",
        buttonHover: "#a8400b"
    }
];

class Login extends Component {
    constructor() {
        super();
        this.state = {
            currentStyle: 0,
            redirect: false
        };
    }
    setRedirect = () => {
        this.setState({
          redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/mainwindow' />
        }
      }

    nextWaifu = () => {
        var n = this.state.currentStyle + 1;
        n = n % styles.length;
        this.setState({currentStyle: n});
    }
    previousWaifu = () => {
        var n = this.state.currentStyle - 1;
        if(n < 0)
            n = styles.length - 1;
        this.setState({currentStyle: n});
    }

    render() {
        document.body.style.backgroundColor = styles[this.state.currentStyle].background;
        return (
            <div>
                <div className="login-title">
                    AniClient
                </div>
                <div className="image-grid">
                    <div><img className="arrow invert" src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/triangle-left-512.png" onClick={this.previousWaifu} alt ="wife"/></div>
                    <img className="login-image" src={styles[this.state.currentStyle].url} alt ="wife" />
                    <div><img className="arrow flip invert" src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/triangle-left-512.png" onClick={this.nextWaifu} alt ="wife" /></div>
                </div>
                <div className="login-fields">
                    <div className="login-username">
                        <div className="login-label large mid-size">Username</div>
                        <input className="login-input" type="text" placeholder="username" name="username" />
                    </div>
                    <div className="login-password">
                        <div className="login-label large mid-size">Password</div>
                        <input className="login-input" type="password" placeholder="password" name="password" />
                    </div>
                    <div className="login-username-check">
                        <input className="login-input" type="checkbox" placeholder="password" name="password" />
                        <div className="login-label small">Save Username</div>
                    </div>
                    <div className="login-password-check">
                        <input className="login-input" type="checkbox" placeholder="password" name="password" />
                        <div className="login-label small">Save Password</div>
                    </div>
                </div>
                {this.renderRedirect()}
                <div className="login-button" onClick={this.setRedirect} >Login</div>
                <div className="login-text small center">Don't have an account? <a href="/">Sign Up</a></div>
            </div>
        );
    }
}

export default Login;
