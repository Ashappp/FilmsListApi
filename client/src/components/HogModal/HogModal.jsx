import React from "react";
import style from "./HogModal.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import showPicker from "../../redux/actions/backDropPickerModalAction";

const HogModal = ({ children, showPickerFunc }) => {
  const allShowPickerActions = () => {
    showPickerFunc();
  };

  return (
    <div className={style} data-id="Backdrop" onClick={allShowPickerActions}>
      {children}
    </div>
  );
};

HogModal.propTypes = {
  children: PropTypes.func.isRequired,
  showPickerFunc: PropTypes.func.isRequired
};

// function mapStateToProps(state) {
//   return {
//     goalMotivation: state.goalData.goalMotivation
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     showPickerFunc: () => dispatch(showPicker())
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(HogModal);
