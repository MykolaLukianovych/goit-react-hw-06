import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import s from "./Contact.module.css"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
      <li className={s.contactItem}>
       <div>
        <p><FaPhone /> {name}</p>
        <p><FaUser /> {number}</p>
        </div>  
       <button onClick={() => dispatch(deleteContact(id))} className={s.button}>Delete</button>   
    </li>
  )
}

export default Contact