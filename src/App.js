import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import "./styles/styles.css";
import { db } from "./components/firebase_config";
import { useEffect, useState } from "react";

function App() {
  const [contactList, setContactList] = useState([]);
  const [selectedContact, setSelectedContact] = useState(undefined);

  const deleteContact = (contact) => {
    db.collection("contacts").doc(contact.id).delete();
    setSelectedContact(undefined);
  };

  useEffect(() => {
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
    getContacts();
  }, []);

  return (
    <div className="app">
      <div className="container">
        <Header />
        <div className="info">
          <ContactList
            setSelectedContact={setSelectedContact}
            contactList={contactList}
          />
          <Details
            selectedContact={selectedContact}
            setSelectedContact={setSelectedContact}
            deleteContact={deleteContact}
            className="details-app"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
