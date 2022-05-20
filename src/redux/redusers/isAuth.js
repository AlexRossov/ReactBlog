const initialState = false;

export function isAuthReduser(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_TRUE':
      return (state = true);
    case 'AUTH_FALSE':
      return (state = false);
    default:
      return state;
  }
}
