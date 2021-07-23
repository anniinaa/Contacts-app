import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

function ContactForm() {
  const [contact, setContact] = useState({
    name: "",
    address: "",
    zipcode: "",
    city: "",
    phone: "",
  });

  return (
    <div className="form">
      <form className="new-contact">
        <TextField type="text" id="name" placeholder="name"></TextField>
        <TextField type="text" id="address" placeholder="address"></TextField>
        <TextField id="zipcode" placeholder="zip code"></TextField>
        <TextField type="text" id="city" placeholder="city"></TextField>
        <TextField id="phone" placeholder="phone number"></TextField>
        <Button type="submin"> Add contact</Button>
      </form>
    </div>
  );
}

export default ContactForm;
