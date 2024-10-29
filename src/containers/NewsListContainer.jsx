import React, { Component } from "react";
import NewsList from "../components/NewsList";
import { fetchGames } from "../utils/api";

class NewsListContainer extends Component {
  state = {
    news: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchNewsData();
  }

  async fetchNewsData() {
    try {
      const data = await fetchGames();
      // console.log(data)
      this.setState({
        news: data,
        loading: false,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { news, loading } = this.state;
    return (
      <div className="container">
        <h1>News List</h1>
        {loading ? (
          <div className="loading"></div>
        ) : (
          <NewsList news={news} onSelect={this.props.onSelect} />
        )}
      </div>
    );
  }
}

export default NewsListContainer;
