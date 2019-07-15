import contactsReducer from './RaducerContacts';
import { combineReducers } from 'redux';

export default combineReducers({ contact: contactsReducer });
