import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import AddMoviesPage from "./pages/AddMoviesPage/AddMoviesPage";
import UploadFilePage from "./pages/UploadFilePage/UploadFilePage";
import s from "./App.module.css";
import Loader from "react-loader-spinner";
import getData from "./redux/actions/getData";
import Header from "./components/Header/Header";
import getArrFromDraw from "./redux/actions/filteredDataActions";

class App extends Component {
  state = {};

  componentDidMount() {
    const { input, data } = this.props;
    this.props.getData(input);
    this.props.getFilterArr(data);
  }

  render() {
    const { data } = this.props;
    return (
      <div className={s.container}>
        {!data.length ? (
          <div className={s.loader}>
            <Loader type="Puff" color="#fff" height="100" width="100" />
            <p className={s.loaderText}>Loading...</p>
          </div>
        ) : (
          <div>
            <Header />
            <Switch>
              <Redirect exact from="/" to="/movies" />
              <Route exact path="/movies" component={MoviesPage} />
              <Route path="/uploadfile" component={UploadFilePage} />
              <Route path="/addmovie" component={AddMoviesPage} />
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
  getData: input => dispatch(getData.asyncDataAction(input)),
  getFilterArr: data => dispatch(getArrFromDraw.getArrFromDraw(data))
});

export default connect(
  MSTP,
  MDTP
)(App);
