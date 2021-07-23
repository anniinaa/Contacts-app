import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import styles from "./styles/styles.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <Router>
      <Switch>
        <div className="app">
          <div className="container">
            <Header />
            <div className="info">
              <ContactList />
              <Route path="/:id" component={Details} />
            </div>
            <Footer />
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
