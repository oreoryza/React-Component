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
      this.setState({loading: false})
    }
  }

  render() {
    return (
      <div>
        <h1>News Detail</h1>
        {this.state.loading ? <h1>Loading...</h1> : <NewsDetail detail={this.state.detail}/>}
      </div>
    );
  }
}

export default NewsDetailContainer;
