import React from 'react';

const ContactListItem = ({ contact }) => {
  return (
    <li>
      {contact.name}: {contact.number}
    </li>
  );
};

export default ContactListItem;
