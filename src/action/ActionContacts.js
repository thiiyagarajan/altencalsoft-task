export const SELECT_CONTACT = 'SELECT_CONTACT';
export const SEARCH_CONTACT = 'SEARCH_CONTACT';
export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const FETCH_CONTACTS_BEGIN = 'FETCH_CONTACTS_BEGIN';
export const FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';

export function fetchContacts() {
  return dispatch => {
    dispatch(fetchContactsBegin());
    const URL = './assets/db/json/contacts.json';
    fetch(URL)
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(fetchContactsSuccess(data));
        return data;
      })
      .catch(error => {
        dispatch(fetchContactsFailure(error));
      });
  };
}

export const fetchContactsBegin = () => ({
  type: FETCH_CONTACTS,
});

export const fetchContactsSuccess = contacts => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload: contacts,
});

export const fetchContactsFailure = error => ({
  type: FETCH_CONTACTS_FAILURE,
  payload: { error },
});

export const selectContact = contact => ({
  type: SELECT_CONTACT,
  payload: { contact },
});

export const searchContact = (keyword, contacts) => ({
  type: SEARCH_CONTACT,
  payload: { keyword: keyword, displaycontact: keyword === '' ? [] : contacts },
});
