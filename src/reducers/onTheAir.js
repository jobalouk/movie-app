const initialState = [];

function onTheAir(state = initialState, action) {
  switch (action && action.type) {
    case 'FETCH_TODOS_SUCCESS':
        return action.tv;
    default:
        return state;
    }
}

export default onTheAir;
