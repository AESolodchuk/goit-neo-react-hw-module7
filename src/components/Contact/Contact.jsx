import { FaPhoneAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contactsSlice'
import css from './Contact.module.css'



const Contact = ({ key, id, name, number }) => {       
    
    const dispatch = useDispatch();  
    const handleDelete = (id) => {          
      dispatch(deleteContact(id));
  }
   return(
    <li key={key} className={css.contact}>
        <div className={css.wrapper}>
            <p className={css.label}><IoIosContact />{name}</p>
            <p className={css.label}><FaPhoneAlt />{number}</p>
        </div>
        <button type="button" className={css.button} onClick={() => handleDelete(id)}>Delete</button>
    </li>)}

export default Contact;
