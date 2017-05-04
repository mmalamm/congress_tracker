export const RECEIVE_SENATORS = 'RECEIVE_SENATORS';

export const receiveSenators = senators => ({
  type: RECEIVE_SENATORS,
  senators
});

export const fetchSenators = senators => dispatch => (
  APIUtil.fetchSenators().then(senators => dispatch(receiveSenators(senators)))
);
