import React, { Component } from "react";
import NewsDetail from "../components/NewsDetail";
import { fetchGamesDetail } from "../utils/api";

class NewsDetailContainer extends Component {
  state = {
    detail: null,
    loading: true,
  };

  componentDidMount() {
    this.fetchDetailData();
  }

  async fetchDetailData() {
    try {
      const data = await fetchGamesDetail(this.props.newsKey);
      console.log(data);
      this.setState({
        detail: data.results,
        loading: false,
      });
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="container">
        {this.state.loading ? (
          <div className="loading"></div>
        ) : (
          <NewsDetail detail={this.state.detail} />
        )}
      </div>
    );
  }
}

export default NewsDetailContainer;
