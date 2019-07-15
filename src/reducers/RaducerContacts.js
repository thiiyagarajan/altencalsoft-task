import {
  SEARCH_CONTACT,
  SELECT_CONTACT,
  FETCH_CONTACTS,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
} from '../action/ActionContacts';

const initAction = { type: '' };
const initState = {};

export default function contactsReducer(
  state = initState,
  action = initAction
) {
  switch (action.type) {
    case SEARCH_CONTACT: {
      const searchKeyword = action.payload.keyword;
      let displaycontacts = state.contacts.filter(contact => {
        for (let key in contact) {
          if (
            searchKeyword.trim() != '' &&
            -1 < contact[key].toLowerCase().indexOf(searchKeyword.toLowerCase())
          ) {
            return true;
          }
        }
      });

      displaycontacts = searchKeyword.trim() == '' ? [] : displaycontacts;

      return {
        ...state,
        searchKeyword: searchKeyword,
        displayContacts: displaycontacts,
        selectedContact: displaycontacts.length < 1 ? {} : displaycontacts[0],
      };
    }
    case SELECT_CONTACT: {
      return {
        ...state,
        selectedContact: action.payload.contact,
      };
    }
    case FETCH_CONTACTS: {
      return {
        ...state,
        contacts: [],
        searchKeyword: '',
        displayContacts: [],
        massage: 'Loading...',
        selectedContact: null,
      };
    }
    case FETCH_CONTACTS_SUCCESS: {
      return {
        ...state,
        searchKeyword: '',
        contacts: action.payload,
        massage: 'Successfully Loaded.',
        displayContacts: [],
        selectedContact: [],
      };
    }
    case FETCH_CONTACTS_FAILURE: {
      return {
        ...state,
        contacts: [],
        selectedIndex: 0,
        searchKeyword: '',
        displayContacts: [],
        massage: 'Loading Failer....',
      };
    }
    default: {
      return {
        ...state,
        contacts: [],
        searchKeyword: '',
        displayContacts: [],
        massage: 'Loading...',
        selectedContact: null,
      };
    }
  }
}
