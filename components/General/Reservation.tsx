export const Reservation = () => {
  const quantityOptions = [
    { value: 1, label: "1 Person" },
    { value: 2, label: "2 Persons" },
    { value: 3, label: "3 Persons" },
    { value: 4, label: "4 Persons" },
    { value: 5, label: "5 Persons" },
    { value: 6, label: "6 Persons" },
    { value: 7, label: "7 Persons" },
    { value: 8, label: "8 Persons" },
    { value: 9, label: "9 Persons" },
    { value: 10, label: "10 Persons" },
  ];

  return (
    <div className="reservation-container-home">
      <div className="reservation-title">
        <h2>Make a Reservation</h2>
      </div>
      <div className="reservation-subtitle">
        <p>Get in touch with restaurant</p>
      </div>
      <div className="reservation-form-container">
        <form id="reservation-form-main">
          <div className="form-fields-container">
          <div className="form-field-reservation">
            <input type="date" />
          </div>
          <div  className="form-field-reservation">
            <input type="time" />
          </div>
          <div  className="form-field-reservation">
            <select>
              <option value=""></option>
              {quantityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
