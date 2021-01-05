import React from 'react';
//import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 2000);
  }
  render() {
    return <div>
      {this.state.isLoading ? "Loading..." : "We are ready!"}
    </div>;
  }
}
  

export default App;
