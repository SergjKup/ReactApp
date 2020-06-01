import React, { Component } from "react";
import { connect } from "react-redux";
import setMediaType from "../../Actions/SetMediaType";
import "./MediaButtons.css";

class MediaButtons extends Component {
  render() {
    return (
      <div className="btn-container">
        <button
          onClick={() => {
            this.props.setMediaType("MOVIES");
            this.getMovieData();
          }}
        >
          Movies
        </button>
        <button
          onClick={() => {
            this.props.setMediaType("TV");
            this.getTVData();
          }}
        >
          TV
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mediaType: state.setMediaType.itemType,
});
const mapDispatchToProps = (dispatch) => ({
  setMediaType: (type) => dispatch(setMediaType(type)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MediaButtons);
