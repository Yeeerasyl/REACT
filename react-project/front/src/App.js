import React from "react";
import SideBar from "./componens/SideBar/SideBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import MyProfile from "./componens/MyProfile/MyProfile";
import Friends from "./componens/Friends/Friends";
import Messages from "./componens/Messages/Messages";
import Photos from "./componens/Photos/Photos";
import Video from "./componens/Video/Video";
import Newspaper from "./componens/Newspaper/Newspaper";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data.message });
      })
      .catch(error => {
        console.error('Ошибка', error);
      });
  }

  render() {
    const { data } = this.state;

    return (
      <BrowserRouter>
        <div className="app-container">
          <div>
            <SideBar></SideBar>
          </div>
          <div className="main-content rounded">
            <Switch>
              <Route path='/myprofile' component={MyProfile} />
              <Route path='/friends' component={Friends} />
              <Route path='/messages' component={Messages} />
              <Route path='/photos' component={Photos} />
              <Route path='/video' component={Video} />
              <Route path='/newspaper' component={Newspaper}/>
              <Route path='/' component={Newspaper} />
            </Switch>
          </div>

          <div className="news-sidebar rounded">
            <h1>{data ? data : "Loading"}</h1>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
