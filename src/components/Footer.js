function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">
      <footer>
        <p>anniina aarnio {year}</p>
      </footer>
    </div>
  );
}

export default Footer;
