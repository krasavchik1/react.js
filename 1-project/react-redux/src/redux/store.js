import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'My first post', likesCount: '3'},
                {id: 2, message: 'Where is my like?', likesCount: '5'},
                {id: 3, message: 'How are you guys?', likesCount: '0'}
            ],
            newPostText: 'write here dude'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state change')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;