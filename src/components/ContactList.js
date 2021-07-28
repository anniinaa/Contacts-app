import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import ContactForm from "./ContactForm";
import { Modal } from "@material-ui/core";
import { db } from "./firebase_config";

function ContactList() {
  const [open, setOpen] = React.useState(false);
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getContacts = async () => {
    db.collection("contacts")
      .orderBy("name")
      .onSnapshot((querySnaphot) => {
        setContactList(
          querySnaphot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            address: doc.data().address,
            zipcode: doc.data().zipcode,
            city: doc.data().city,
            phone: doc.data().phone,
            time: doc.data().Time,
          }))
        );
      });
  };

  const openDetails = () => {};

  return (
    <div className="contacts">
      <Button onClick={handleOpen} className="button">
        add new contact
      </Button>
      <Modal open={open} onClose={handleClose}>
        <ContactForm onClose={handleClose} />
      </Modal>
      <div className="names">
        {contactList.map((contact) => {
          return (
            <div city={contact.city}>
              <a href={contact.name} onClick={openDetails}>
                {contact.name}
              </a>
              <button
                onClick={() =>
                  db.collection("contacts").doc(contact.id).delete()
                }
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactList;
