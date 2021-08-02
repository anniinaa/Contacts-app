import React from "react";
import Button from "@material-ui/core/Button";
import ContactForm from "./ContactForm";
import { Modal } from "@material-ui/core";

function ContactList(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpenAddModal = () => {
    setOpen(true);
  };

  const handleCloseAddMoadl = () => {
    setOpen(false);
  };

  const setDetails = (contact) => {
    props.setSelectedContact(contact);
  };

  return (
    <div className="contacts">
      <Button onClick={handleOpenAddModal} className="button">
        add new contact
      </Button>
      <Modal open={open} onClose={handleCloseAddMoadl}>
        <ContactForm onClose={handleCloseAddMoadl} />
      </Modal>
      <div className="names">
        {props.contactList.map((contact) => {
          return (
            <div key={contact.id}>
              <button onClick={() => setDetails(contact)}>
                {contact.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactList;
