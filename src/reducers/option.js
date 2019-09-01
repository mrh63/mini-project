const optionReducerDefaultState = {
    text: ["XL"],
    count: 0
};

export default (state = optionReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_OPTION':
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
};