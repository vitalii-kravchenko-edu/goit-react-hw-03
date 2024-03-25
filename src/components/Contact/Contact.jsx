import styles from "./Contact.module.css";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <div className={styles.item}>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
