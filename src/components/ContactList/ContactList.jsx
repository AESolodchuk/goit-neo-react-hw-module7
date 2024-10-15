import { useSelector } from 'react-redux'
import Contact from '../Contact/Contact'
import css from './ContactList.module.css'


const ContactList = () => {
    
  const selectContacts = useSelector(state => state.contacts.items);
  const selectNameFilter = useSelector(state => state.filters.name);
  
  const filteredContacts = selectContacts.filter(contact => contact.name.toLowerCase().includes(selectNameFilter.toLowerCase()));


  if (filteredContacts.length > 0) {
    return (
      <ul className={css.list}>
        {filteredContacts.map(({ name, number, id }) => (
          <Contact name={name} number={number} key={id} id={id} />
        ))}
      </ul>
    );
  }
}


export default ContactList