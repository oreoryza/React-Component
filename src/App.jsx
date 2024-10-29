import React, {Component} from "react"
import NewsListContainer from "./containers/NewsListContainer"
import NewsDetailContainer from "./containers/NewsDetailContainer"

class App extends Component {
  state = {
    SelectedNewsKey: null,
  }

  handleSelectNews = (key) => {
    this.setState({
      SelectedNewsKey: key
    })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.SelectedNewsKey ? <NewsDetailContainer newsKey={this.SelectedNewsKey} /> :
        <NewsListContainer onSelect={this.handleSelectNews}/>
        }
      </div>
    )
  }
}

export default App