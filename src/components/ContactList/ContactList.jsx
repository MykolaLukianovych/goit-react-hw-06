import { useSelector } from "react-redux";
import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"
import { selectContacts, selectNameFilter } from "../../redux/selectors";



const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    const filterContactList = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
        <ul className={s.contactsList}>
            {filterContactList.map(data => (
                    <Contact key={data.id} data={data} />
            ))}
        </ul>
    );
};

export default ContactList