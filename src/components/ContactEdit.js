import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { db } from "./firebase_config";

const ContactEdit = (props) => {
  const { selectedContact } = props;

  const [name, setName] = useState(selectedContact.name);
  const [address, setAddress] = useState(selectedContact.address);
  const [zipcode, setZipcode] = useState(selectedContact.zipcode);
  const [city, setCity] = useState(selectedContact.city);
  const [phone, setPhone] = useState(selectedContact.phone);

  const editContact = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      id: selectedContact.id,
      address: address,
      zipcode: zipcode,
      city: city,
      phone: phone,
    };
    await db.collection("contacts").doc(selectedContact.id).set(data);
    props.setSelectedContact(data);
    props.onClose(false);
  };

  return (
    <div className="form">
      <form className="new-contact">
        <Button onClick={() => props.onClose(false)}>X</Button>
        <TextField
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="name"
        ></TextField>
        <TextField
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          type="text"
          placeholder="address"
        ></TextField>
        <TextField
          onChange={(e) => setZipcode(e.target.value)}
          value={zipcode}
          placeholder="zip code"
        ></TextField>
        <TextField
          onChange={(e) => setCity(e.target.value)}
          value={city}
          type="text"
          placeholder="city"
        ></TextField>
        <TextField
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          placeholder="phone number"
        ></TextField>
        <Button onClick={editContact} type="submit">
          Edit contact
        </Button>
      </form>
    </div>
  );
};

export default ContactEdit;
