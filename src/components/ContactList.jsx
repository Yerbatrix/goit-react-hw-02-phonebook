import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
