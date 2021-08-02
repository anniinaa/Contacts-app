import { Button, Modal } from "@material-ui/core";
import React, { useState } from "react";
import ContactEdit from "./ContactEdit";

function Details(props) {
  const [open, setOpen] = useState(false);

  if (!props.selectedContact) {
    return <div>Tyhjä</div>;
  }

  const handleOpenEditModal = () => {
    setOpen(true);
  };

  const handleCloseEditModal = () => {
    setOpen(false);
  };

  return (
    <div className="details">
      <div className="card">
        <h4 className="name">{props.selectedContact.name}</h4>
        <p className="address">{props.selectedContact.address}</p>
        <p className="zip">{props.selectedContact.zipcode}</p>
        <p className="city">{props.selectedContact.city}</p>
        <p className="phoneNumber">{props.selectedContact.phone}</p>
      </div>
      <Button onClick={handleOpenEditModal} className="button">
        Edit contact
      </Button>
      <Modal open={open} onClose={handleCloseEditModal}>
        <ContactEdit
          selectedContact={props.selectedContact}
          setSelectedContact={props.setSelectedContact}
          onClose={handleCloseEditModal}
        />
      </Modal>
      <button onClick={() => props.deleteContact(props.selectedContact)}>
        X
      </button>
    </div>
  );
}

export default Details;
