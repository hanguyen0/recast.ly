import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selected: false,
      index: 0
    }
  }
  onClickVideo(index) {
    this.setState({index});
    this.render();
  }
  render() {
    return(
      <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div id='playerSpot'>
            <VideoPlayer video={exampleVideoData[this.state.index]}/>
          </div>
        </div>
        <div className="col-md-5">
          <div>
          <h5><em><VideoList videos={exampleVideoData} onCluck={this.onClickVideo.bind(this)}/></em></h5>
          </div>
        </div>
      </div>
    </div>
    )
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
// <h5><em>videoList</em> view goes here</h5>
//<h5><em>videoPlayer</em> view goes here</h5>
export default App;


