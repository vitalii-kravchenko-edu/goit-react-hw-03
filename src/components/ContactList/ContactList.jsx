import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  const elements = contacts.map((contact) => (
    <Contact
      key={contact.id}
      contact={contact}
      onDeleteContact={onDeleteContact}
    />
  ));

  return <ul className={styles.list}>{elements}</ul>;
};

export default ContactList;
