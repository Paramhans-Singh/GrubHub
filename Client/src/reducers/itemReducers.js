export const getAllItemsReducer = (state={items: []}, action)=> {
    switch(action.type) {
        case 'GET_ITEMS_REQUEST': return {loading: true, ...state};
        case 'GET_ITEMS_SUCCESS': return {loading: false, items: action.payload};
        case 'GET_ITEMS_FAILED': return {loading: false, error: action.payload};
        default: return state;
    }
};
