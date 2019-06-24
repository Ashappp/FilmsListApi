import React, { Component } from "react";
import API from "../../services/api";
import { connect } from "react-redux";
import addMovie from "../../redux/actions/addMovieAction";
import PropTypes from "prop-types";
import s from "./AddMoviesPage.module.css";

class AddMoviesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: "",
      yearInput: "",
      formatInput: "",
      starInput: "",
      submitDisabled: true
    };
  }

  handlerOnSubmit = e => {
    console.log("ok");
    e.preventDefault();
    const { titleInput, yearInput, formatInput, starInput } = this.state;
    const { addMovie } = this.props;
    const createObj = {
      title: titleInput,
      releaseYear: Number(yearInput),
      format: formatInput,
      stars: starInput
    };

    API.createMovie(createObj)
      .then(res => {
        addMovie(res.data.createdFilm);
        this.props.history.push("/movies");
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      titleInput: "",
      yearInput: "",
      formatInput: "",
      starInput: "",
      submitDisabled: true
    });
  };

  handleChange = e => {
    const { titleInput, yearInput, formatInput, starInput } = this.state;
    const disable =
      titleInput.length > 0 &&
      yearInput.length > 0 &&
      formatInput.length > 0 &&
      starInput.length > 0;
    this.setState({
      [e.target.name]: e.target.value,
      submitDisabled: !disable
    });
  };

  render() {
    const {
      titleInput,
      yearInput,
      formatInput,
      starInput,
      submitDisabled
    } = this.state;
    return (
      <form className={s.form} onSubmit={this.handlerOnSubmit}>
        <input
          className={s.input}
          type="text"
          onChange={e => this.handleChange(e)}
          name="titleInput"
          placeholder="Title"
          value={titleInput}
          required
        />
        <input
          className={s.input}
          type="number"
          min="1960"
          max="2022"
          onChange={e => this.handleChange(e)}
          name="yearInput"
          placeholder="Year"
          value={yearInput}
          required
        />
        <input
          className={s.input}
          type="text"
          onChange={e => this.handleChange(e)}
          name="formatInput"
          placeholder="Format"
          value={formatInput}
          required
        />
        <input
          className={s.input}
          type="text"
          onChange={e => this.handleChange(e)}
          name="starInput"
          placeholder="Star"
          value={starInput}
          required
        />
        <input
          className={s.btn}
          type="submit"
          value="Create Movie"
          disabled={submitDisabled ? true : false}
        />
      </form>
    );
  }
}

const MDTP = dispatch => ({
  addMovie: data => dispatch(addMovie(data))
});

AddMoviesPage.propTypes = {
  titleInput: PropTypes.string.isRequired,
  yearInput: PropTypes.string.isRequired,
  formatInput: PropTypes.string.isRequired,
  starInput: PropTypes.string.isRequired,
  submitDisabled: PropTypes.bool.isRequired,
  addMovie: PropTypes.func.isRequired
};

export default connect(
  null,
  MDTP
)(AddMoviesPage);
