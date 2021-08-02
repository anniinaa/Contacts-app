import { Button, Modal } from "@material-ui/core";
import React, { useState } from "react";
import ContactEdit from "./ContactEdit";

function Details(props) {
  const [open, setOpen] = useState(false);
  const setStyle = {
    textAlign: "center",
    margin: "15px",
  };

  if (!props.selectedContact) {
    return <div style={setStyle}>Please select contact</div>;
  }

  const handleOpenEditModal = () => {
    setOpen(true);
  };

  const handleCloseEditModal = () => {
    setOpen(false);
  };

  return (
    <div className="detail-card">
      <div className="card">
        <h4 className="name">{props.selectedContact.name}</h4>
        <p className="contact-info">Contact info</p>
        <p className="address">Address: {props.selectedContact.address}</p>
        <p className="zip">Zip Code: {props.selectedContact.zipcode}</p>
        <p className="city">City: {props.selectedContact.city}</p>
        <p className="phoneNumber">
          Phone Number: {props.selectedContact.phone}
        </p>
      </div>
      <div className="edit-buttons">
        <Button
          id="editButton"
          onClick={handleOpenEditModal}
          className="button"
        >
          Edit contact
        </Button>
        <Modal open={open} onClose={handleCloseEditModal}>
          <ContactEdit
            selectedContact={props.selectedContact}
            setSelectedContact={props.setSelectedContact}
            onClose={handleCloseEditModal}
          />
        </Modal>
        <Button
          id="deleteButton"
          onClick={() => props.deleteContact(props.selectedContact)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Details;
