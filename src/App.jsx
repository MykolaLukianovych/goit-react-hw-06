import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";



function App() {
  const [contacts, setContacts] = useState(() => {
    const lastContactsList = window.localStorage.getItem("lastContactsList");

    if (lastContactsList !== null) {
      return JSON.parse(lastContactsList);
    }

    return [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]
  });
  

  useEffect(() => {
    window.localStorage.setItem("lastContactsList", JSON.stringify(contacts))
  }, [contacts]);


  const [searchFriend, setSearchFriend] = useState("");

  const handleAddContact = (newContact) => {
    setContacts((prevContact) => [...prevContact, newContact])
  }

  const handleDeleteContact = (contactId) => {
    setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== contactId))
  };

  const filteredFriends = contacts.filter(contact => contact.name.toLowerCase().includes(searchFriend.toLowerCase()));

  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox value={searchFriend} onChange={ setSearchFriend } />
      <ContactList contacts={ filteredFriends } handleDeleteContact={handleDeleteContact} />
      
    </div>
  )
}

export default App
