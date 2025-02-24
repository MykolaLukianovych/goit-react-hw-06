import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"


const ContactList = ({contacts, handleDeleteContact}) => {
    return (
        <ul className={s.contactsList}>
            {contacts.map(contact => (<Contact key={contact.id} id={contact.id} name={contact.name} number={contact.number} handleDeleteContact={ handleDeleteContact } />
            ))}
        </ul>
    );
}

export default ContactList