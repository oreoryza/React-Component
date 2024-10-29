import React, { Component } from "react";
import NewsListContainer from "./containers/NewsListContainer";
import NewsDetailContainer from "./containers/NewsDetailContainer";

class App extends Component {
  state = {
    SelectedNewsKey: null,
  };

  handleSelectNews = (key) => {
    this.setState({
      SelectedNewsKey: key,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.SelectedNewsKey ? (
          <div className="main">
            <button className="btn" onClick={() => this.handleSelectNews(null)}>Go Back</button>
            <button className="btn-title">Games News</button>
            <NewsDetailContainer newsKey={this.state.SelectedNewsKey} />
          </div>
        ) : (
          <NewsListContainer onSelect={this.handleSelectNews} />
        )}
      </div>
    );
  }
}

export default App;
