import { FaPhoneAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from '../../redux/contactsOps'
import { selectError, selectIsLoading } from "../../redux/selectors"; 
import css from './Contact.module.css'



const Contact = ({ id, name, number }) => {     

    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    
    const dispatch = useDispatch();  
    const handleDelete = (id) => {          
      dispatch(deleteContact(id));
  }
   return(
    <>
       <div className={css.wrapper}>
           <p className={css.label}><IoIosContact />{name}</p>
           <p className={css.label}><FaPhoneAlt />{number}</p>
       </div>
       <button type="button" className={css.button} onClick={() => handleDelete(id)}>Delete</button>
    </>
    )}

export default Contact;
