import React, { Component } from 'react';
import "./login.css";
import { VideoPlayer } from 'react-video-players';

class Login extends Component {
    render() {
        return (
            <div>
                <div class="login-title">
                    AniClient
                </div>
                <div className="image-grid">
                    <div><img className="arrow invert" src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/triangle-left-512.png" /></div>
                    <img class="login-image" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4d99d831-9f85-4199-928a-397a43693f01/dcmtozq-9549afd7-cd66-41b0-a575-7a651087ac95.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRkOTlkODMxLTlmODUtNDE5OS05MjhhLTM5N2E0MzY5M2YwMVwvZGNtdG96cS05NTQ5YWZkNy1jZDY2LTQxYjAtYTU3NS03YTY1MTA4N2FjOTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aF7kFTM2K8v_O2Uk_svCS6caTua5MtrRC2zBcAb1344" />
                    <div><img className="arrow flip invert" src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/triangle-left-512.png" /></div>
                </div>
                <div class="login-fields">
                    <div className="login-username">
                        <div class="login-label large">Username</div>
                        <input className="login-input" type="text" placeholder="username" name="username" />
                    </div>
                    <div className="login-password">
                        <div class="login-label large">Password</div>
                        <input className="login-input" type="password" placeholder="password" name="password" />
                    </div>
                    <div className="login-username-check">
                        <input className="login-input" type="checkbox" placeholder="password" name="password" />
                        <div class="login-label small">Save Username</div>
                    </div>
                    <div className="login-password-password">
                        <input className="login-input" type="checkbox" placeholder="password" name="password" />
                        <div class="login-label small">Save Password</div>
                    </div>
                </div>
                <div className="login-button">Login</div>
                <div className="login-text small center">Don't have an account? <a href="#">Sign Up</a></div>
            </div>
        );
    }
}

export default Login;
