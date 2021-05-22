const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dasha'},
        {id: 2, name: 'Konstantin'},
        {id: 3, name: 'Vlad'},
        {id: 4, name: 'Dmytro'}
    ],
    messages: [
        {id: 1, message: '- ayo'},
        {id: 2, message: '- Hello'},
        {id: 3, message: '- im watch'},
        {id: 4, message: '- im watch'}
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messages.push({id: 6, message: body});
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;