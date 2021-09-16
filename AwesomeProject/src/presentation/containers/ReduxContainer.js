import { connect } from 'react-redux';
import { TOGGLE_IS_USER_AUTHENTICATED } from '../../application/models/app/app.actions';
import { GET_OFFER_REQUEST } from '../../application/models/offer/offer.actions';
import { REGISTER_USER_REQUEST } from '../../application/models/user/user.actions';

const ReduxContainer = Component => {
  // map state to props
  const mapStateTopProps = state => {
    let { isUserAuthenticated } = state.app;
    let { user, registrationError, isRegisterLoading } = state.user;
    return {
      isUserAuthenticated,
      user,
      registrationError,
      isRegisterLoading,
    };
  };
  // map dispatch to props
  const mapDispatchToProps = dispatch => ({
    toggleIsUserAuthenticated: isUserAuthenticated => {
      dispatch({
        type: TOGGLE_IS_USER_AUTHENTICATED,
        payload: {
          isUserAuthenticated,
        },
      });
    },
    registerUser: username => {
      dispatch({
        type: REGISTER_USER_REQUEST,
        payload: {
          username,
        },
      });
    },
    getOffers: _ => {
      dispatch({
        type: GET_OFFER_REQUEST,
      });
    },
  });
  return connect(mapStateTopProps, mapDispatchToProps)(Component);
};

export default ReduxContainer;
