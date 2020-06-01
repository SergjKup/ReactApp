import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MediaMain from "./Components/MediaMain/MediaMain";
import Login from "./Components/Profile/Login";
import Profile from "./Components/Profile/Profile";
import { connect } from "react-redux";
import Loader from "./Components/Loader/Loader";
import SearchResults from "./Components/SearchResults/SearchResults";
import MediaDetails from "./Components/MediaDetails/MediaDetails";
import tvGenre from "./Actions/TVActions/TVGenre";
import movieGenre from "./Actions/MovieActions/MovieGenre";
import apiKeyConfig from "./Actions/ApiKeyConfig";
import searchTrending from "./Actions/MovieActions/Trending";
import searchTrendingTV from "./Actions/TVActions/Trending";

class App extends Component {
  componentDidMount() {
    this.props.apiKeyConfig(
      `https://api.themoviedb.org/3/configuration?api_key=${this.props.apiKey}`
    );
    this.props.searchTrending(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${this.props.apiKey}`
    );
    this.props.searchTrendingTV(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${this.props.apiKey}`
    );
    this.props.movieGenre(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.props.apiKey}&language=ru-RU`
    );
    this.props.tvGenre(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=${this.props.apiKey}&language=ru-RU`
    );
  }
  render() {
    return (
      <Switch>
        <Route path="/search-result/:id" component={SearchResults} />
        <Route path="/details/:type/:id" component={MediaDetails} />
        <PersonalRoute path="/profile" session={this.props.session} />
        <Route path="/" component={MediaMain} />
      </Switch>
    );
  }
}

const PersonalRoute = (props) =>
  props.session === "guest" ? (
    <Route path="/profile" component={Profile} />
  ) : (
    <Route to="/login" component={Login} />
  );

const mapStateToProps = (state) => ({
  apiKey: state.apiKeyConfig.apiKey,
  token: state.session.token,
  session: state.session.session,
});

const mapDispatchToProps = (dispatch) => ({
  apiKeyConfig: (url) => dispatch(apiKeyConfig(url)),
  searchTrending: (url) => dispatch(searchTrending(url)),
  searchTrendingTV: (url) => dispatch(searchTrendingTV(url)),
  movieGenre: (url) => dispatch(movieGenre(url)),
  tvGenre: (url) => dispatch(tvGenre(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
