import React from 'react';
import PropTypes from 'prop-types';
import styles from './contacts.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import itemTransition from '../transitions/itemSlide.module.css';

function ContactsList({ filter, contacts, deleteContact }) {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toUpperCase().includes(filter.toUpperCase()),
  );
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {filteredContacts.map(contact => (
        <CSSTransition
          key={contact.id}
          timeout={250}
          classNames={itemTransition}>
          <li className={styles.listItem}>
            <span>{contact.name}: </span>
            <span>{contact.number}</span>
            <button
              className={styles.btnDelete}
              type="button"
              data-id={contact.id}
              onClick={deleteContact}>
              &#9587;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
    // )
  );
}

ContactsList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
