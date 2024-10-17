import { useSelector } from 'react-redux'
import { contacts, filter } from '../../redux/selectors'
import Contact from '../Contact/Contact'
import css from './ContactList.module.css'


const ContactList = () => {
    
  const selectContacts = useSelector(contacts);
  const selectNameFilter = useSelector(filter);
  
  const filteredContacts = selectContacts.filter(contact => contact.name.toLowerCase().includes(selectNameFilter.toLowerCase()));


  if (filteredContacts.length > 0) {
    return (
      <ul className={css.list}>
        {filteredContacts.map(({ name, number, id }) => (
          <li key={id} className={css.contact}>
            <Contact name={name} number={number} id={id} />
            </li>          
        ))}
      </ul>
    );
  }
}


export default ContactList