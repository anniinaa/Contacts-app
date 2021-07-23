import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ContactForm from "./ContactForm";
import { Modal } from "@material-ui/core";

function ContactList() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="contacts">
      <Button onClick={handleOpen} className="button">
        add new contact
      </Button>
      <Modal open={open} onClose={handleClose}>
        <ContactForm />
      </Modal>
      <div className="names">
        <ul>
          <li>anniina aarnio</li>
          <li>anniina aarnio</li>
          <li>anniina aarnio</li>
          <li>anniina aarnio</li>
          <li>anniina aarnio</li>
          <li>anniina aarnio</li>
        </ul>
      </div>
    </div>
  );
}

export default ContactList;
