import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import styles from "./styles/styles.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <div className="info">
          <ContactList />
          <Details />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
