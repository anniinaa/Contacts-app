import React from "react";
import Button from "@material-ui/core/Button";

function ContactList() {
  return (
    <div className="contacts">
      <Button className="button">add new contact</Button>
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
