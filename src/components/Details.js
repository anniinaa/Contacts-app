function Details(props) {
  return (
    <div className="details">
      <div className="card">
        <h4 className="name"> </h4>
        <p className="address">Lohkopellontie 36</p>
        <p className="zip">444442</p>
        <p className="city">{props.city}</p>
        <p className="phoneNumber">+358 456 524456</p>
      </div>
    </div>
  );
}

export default Details;
