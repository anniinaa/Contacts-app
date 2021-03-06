import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { db } from "./firebase_config";
import firebase from "firebase";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const addContact = (e) => {
    e.preventDefault();
    db.collection("contacts").add({
      name: name,
      address: address,
      zipcode: zipcode,
      city: city,
      phone: phone,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
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
        <Button onClick={addContact} type="submit">
          Add contact
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
