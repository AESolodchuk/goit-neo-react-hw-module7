import { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import './App.css'


function App() {

  const [contacts, setContacts] = useState(() =>
  JSON.parse(localStorage.getItem('contacts')) || []
  )
  
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));   
  }, [contacts])
  

const handleSearchChange = ({ target: { value } }) => {
    setSearchValue(value);
  };
 
  
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox handleSearchChange = {handleSearchChange} searchValue={searchValue}/>
      {contacts.length > 0 && <ContactList  contactList={contacts.filter((contact) =>
            contact.name.toLowerCase().includes(searchValue.toLowerCase())
          )} />}
    </div>)
}

export default App
