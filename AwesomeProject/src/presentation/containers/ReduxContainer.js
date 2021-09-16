import { connect } from 'react-redux';
import { TOGGLE_IS_USER_AUTHENTICATED } from '../../application/models/app/app.actions';
import { GET_OFFER_REQUEST } from '../../application/models/offer/offer.actions';
import { GET_TAGS_REQUEST } from '../../application/models/tag/tag.actions';
import { REGISTER_USER_REQUEST } from '../../application/models/user/user.actions';

const ReduxContainer = Component => {
  // map state to props
  const mapStateTopProps = state => {
    let { isUserAuthenticated } = state.app;
    let { user, registrationError, isRegisterLoading } = state.user;
    let { offers, isGetOffersLoading, getOffersError } = state.offer;
    let { tags } = state.tag;
    return {
      isUserAuthenticated,
      user,
      registrationError,
      isRegisterLoading,
      offers,
      isGetOffersLoading,
      getOffersError,
      tags,
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
    registerUser: name => {
      console.log({ name });
      dispatch({
        type: REGISTER_USER_REQUEST,
        payload: {
          name,
        },
      });
    },
    getOffers: () => {
      dispatch({
        type: GET_OFFER_REQUEST,
      });
    },
    getTags: () => {
      dispatch({
        type: GET_TAGS_REQUEST,
      });
    },
  });
  return connect(mapStateTopProps, mapDispatchToProps)(Component);
};

export default ReduxContainer;
