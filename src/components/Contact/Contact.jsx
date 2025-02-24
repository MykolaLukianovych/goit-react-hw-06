import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import s from "./Contact.module.css"

const Contact = ({ name, number, id, handleDeleteContact}) => {
  return (
      <li className={s.contactItem}>
       <div>
        <p><FaPhone /> {name}</p>
        <p><FaUser /> {number}</p>
        </div>  
       <button onClick={() => handleDeleteContact(id)} className={s.button}>Delete</button>   
    </li>
  )
}

export default Contact