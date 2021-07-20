function Details(props) {
  const id = props.match.params.id;

  return (
    <div className="details">
      <div className="card">
        <h4 className="name">Anniina Aarnio {id}</h4>
        <p className="address">Lohkopellontie 36</p>
        <p className="zip">444442</p>
        <p className="city">Helsinki</p>
        <p className="phoneNumber">+358 456 524456</p>
      </div>
    </div>
  );
}

export default Details;
