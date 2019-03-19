
import React, { Component } from 'react';
import './utils.css';

class ScrollToTop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', () => this.setState({ scrollY: window.scrollY }));
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', () => this.setState({ scrollY: window.scrollY }));
  }
  
  // make this cleaner
  scrollToTop() {
    let scrollInterval = setInterval(() => {
      let scrollDiff = window.scrollY * 0.1
      if (scrollDiff < 1) {
        scrollDiff = 1;
      }
      let scrollHeight = window.scrollY - scrollDiff;
      if (scrollHeight < 1) {
        scrollHeight = 0;
        window.scrollTo(0, 0);
        clearInterval(scrollInterval);
      }
      window.scrollTo(0, scrollHeight);
    }, 1)
  }

  render() {
    return ( 
      <button 
        onClick={this.scrollToTop} 
        className="button-scroll-up ti-arrow-up" 
        style={{
          display: this.state.scrollY > 0 ? "block": "none"
        }}
      /> 
    );
  }
}
 
export default ScrollToTop;