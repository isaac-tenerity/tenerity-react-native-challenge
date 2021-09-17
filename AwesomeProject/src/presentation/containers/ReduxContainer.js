import { connect } from 'react-redux';
import { TOGGLE_IS_USER_AUTHENTICATED } from '../../application/models/app/app.actions';
import { GET_OFFER_REQUEST } from '../../application/models/offer/offer.actions';
import { GET_TAGS_REQUEST } from '../../application/models/tag/tag.actions';
import {
  ADD_USER_OFFER_REQUEST,
  GET_SELECTED_OFFERS,
  REGISTER_USER_REQUEST,
  REMOVE_USER_OFFER_REQUEST,
} from '../../application/models/user/user.actions';

const ReduxContainer = Component => {
  // map state to props
  const mapStateTopProps = state => {
    let { isUserAuthenticated } = state.app;
    let {
      user,
      registrationError,
      isRegisterLoading,
      selectedOffers,
      isSelectedOffersLoading,
      selectedOffersError,
    } = state.user;
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
      selectedOffers,
      selectedOffersError,
      isSelectedOffersLoading,
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
    getSelectedOffers: id => {
      dispatch({
        type: GET_SELECTED_OFFERS,
        payload: {
          id,
        },
      });
    },
    addUserOffer: (user, offerId) => {
      console.log({ user });
      dispatch({
        type: ADD_USER_OFFER_REQUEST,
        payload: {
          user,
          offerId,
        },
      });
    },
    removeUserOffer: (user, offerId) => {
      console.log({ user });
      dispatch({
        type: REMOVE_USER_OFFER_REQUEST,
        payload: {
          user,
          offerId,
        },
      });
    },
  });
  return connect(mapStateTopProps, mapDispatchToProps)(Component);
};

export default ReduxContainer;
