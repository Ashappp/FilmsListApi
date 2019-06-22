import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "./components/Dashboard/Dashboard";
import UploadFile from "./components/UploadFile/UploadFile";
import AddFilmCard from "./components/AddFilmCard/AddFilmCard";
import style from "./App.css";
import Loader from "react-loader-spinner";
import asyncDataAction from "./redux/actions/getData";
import Header from "./components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { input } = this.props;
    this.props.getData(input);
  }
  render() {
    const { data } = this.props;
    return (
      <div
        className={style.App}
        style={
          {
            // backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${})`
          }
        }
      >
        {!data.length ? (
          <div className={style.loader}>
            <Loader type="Puff" color="#fff" height="100" width="100" />
            <p className={style.loaderText}>Loading...</p>
          </div>
        ) : (
          <div>
            <Header />
            <Switch>
              <Route exact path="/" render={() => <Dashboard />} />
              <Route path="/upload" component={UploadFile} />
              <Route path="/add" component={AddFilmCard} />
            </Switch>
          </div>
        )}
      </div>
    );
  }
}

const MSTP = store => ({
  data: store.data
});

const MDTP = dispatch => ({
  getData: input => dispatch(asyncDataAction(input))
});

export default connect(
  MSTP,
  MDTP
)(App);
