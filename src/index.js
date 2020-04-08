// TODO: Render the `App` component to the DOM
//debugger;
import App from './components/App.js';
import searchYouTube from './lib/SearchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';

ReactDOM.render(<App search={searchYouTube} API_KEY={YOUTUBE_API_KEY}/>, document.getElementById("app"));

//ReactDOM.render(<App />, document.getElementById('app'));