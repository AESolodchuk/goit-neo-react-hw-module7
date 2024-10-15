import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { nanoid } from 'nanoid'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contactsSlice'


const ContactList = () => {
    
    const contactList = useSelector(state => state.contacts);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
      dispatch(deleteContact(id));
    }
    return (
      <ul className={css.list}>
        {contactList.map(({name, number }) => (
          <Contact key={nanoid()} id={nanoid()} name={name} number={number} handleDelete={handleDelete} />
        ))}
      </ul>
    );
    
   }


export default ContactList