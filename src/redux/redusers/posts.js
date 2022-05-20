const initialState = [];

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_START_POSTS':
      return action.payload;

    case 'ADD_POST':
      return [
        ...state,
        {
          createdAt: Date.now(),
          title: action.payload.title,
          imageUrl: action.payload.imageUrl,
          discription: action.payload.discription,
          id: state[state.length - 1].id + 1,
        },
      ];

    case 'REMOVE_POST':
      return state.filter((obj) => obj.id !== action.payload);

    case 'UPDATE_POST':
      return state.map((obj) =>
        obj.id === action.payload.id
          ? {
              ...obj,
              title: action.payload.title,
              imageUrl: action.payload.imageUrl,
              discription: action.payload.discription,
            }
          : obj,
      );

    default:
      return state;
  }
}
