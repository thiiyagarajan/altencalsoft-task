export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';

export const addContact = (contact, contacts) => ({
  type: ADD_CONTACT,
  payload: { contact, contacts },
});

export const deleteContact = (contact, contacts) => ({
  type: DELETE_CONTACT,
  payload: { contact, contacts },
});

export const updateContact = (contact, contacts) => ({
  type: UPDATE_CONTACT,
  payload: { contact, contacts },
});
