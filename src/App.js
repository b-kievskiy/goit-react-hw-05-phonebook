import React, { Component } from 'react';
import { Form1 } from './Form/Form1';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
import { CSSTransition } from 'react-transition-group';
import styles from './app.module.css';
import slideTransition from './transitions/slide.module.css';
// import alarmTransition from './transitions/apear.module.css';
import alarmTransition from './transitions/slideright.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    isShow: false,
    isAlarm: false,
  };

  componentDidMount() {
    this.setState({ isShow: true });
    const prevContacts = localStorage.getItem('contacts');
    if (prevContacts) {
      try {
        const contacts = JSON.parse(prevContacts);
        this.setState({ contacts });
      } catch (error) {
        console.error('Error = ', error);
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addNewUser = newUser => {
    this.setState(prev => ({
      contacts: [...prev.contacts, newUser],
    }));
  };

  handlerOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteContact = e => {
    const delContact = this.state.contacts.filter(
      contact => contact.id !== e.target.dataset.id,
    );
    this.setState({
      contacts: [...delContact],
    });
  };

  setAlarm = () => {
    this.setState({ isAlarm: true });
  };
  hideAlarm = () => {
    this.setState({ isAlarm: false });
  };

  render() {
    const { filter, contacts, isShow, isAlarm } = this.state;
    return (
      <>
        <div className={styles.header}>
          <CSSTransition
            in={isShow}
            timeout={500}
            classNames={slideTransition}
            unmountOnExit>
            <h1 className={styles.title}>Phonebook</h1>
          </CSSTransition>
          <CSSTransition
            in={isAlarm}
            timeout={250}
            classNames={alarmTransition}
            unmountOnExit>
            <div onClick={this.hideAlarm} className={styles.alarm}>
              Contact already exist!
            </div>
          </CSSTransition>
        </div>
        <Form1
          contacts={contacts}
          addNewUser={this.addNewUser}
          setAlarm={this.setAlarm}
        />
        <h2>Contacts</h2>
        <Filter
          filter={filter}
          contacts={contacts}
          handlerOnChange={this.handlerOnChange}
        />
        <ContactsList
          filter={filter}
          contacts={contacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
