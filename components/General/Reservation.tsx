"use client";
import { queryPutReservation } from "@/utils/querys";
import { useMutation } from "@apollo/client";
import { useState } from "react";
export const Reservation = () => {
  const [createReservation, { data, loading, error }] =
    useMutation(queryPutReservation);
  const [hidden, setHidden] = useState("hidden");
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
    { value: 10, label: "10 Persons" }
  ];

  const handlePersonalDataShow = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (hidden === "hidden") {
      setHidden("");
      return;
    }
    createReservation({
      variables: {
        createReservationInput2: {
          ...formData,
          numberOfPeople: parseInt(formData.numberOfPeople.toString())
        }
      }
    });
    setFormData({
      date: "",
      email: "",
      firstName: "",
      hour: "00:00",
      numberOfPeople: 0,
      phone: "",
      surname: ""
    });
  };

  // Form data

  const [formData, setFormData] = useState({
    date: "",
    email: "",
    firstName: "",
    hour: "00:00",
    numberOfPeople: 0,
    phone: "",
    surname: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div className="reservation-container-home">
      <div className="reservation-title">
        <h2>Make a Reservation</h2>
      </div>
      <div className="reservation-subtitle">
        <p>Get in touch with restaurant</p>
      </div>
      <div className="reservation-form-container">
        <form
          id="reservation-form-main"
          onSubmit={(e) => handlePersonalDataShow(e)}
        >
          <div className={`reservation-main-information ${hidden}`}>
            <div className="form-field-personal-data">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
              />
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
                placeholder="Last Name"
              />
            </div>
            <div className="form-field-personal-email">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
              />
            </div>
            <div className="form-field-personal-phone">
              <input
                type="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
              />
            </div>
          </div>
          <div className="form-fields-container">
            <div className="form-field-reservation">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-field-reservation">
              <input
                type="time"
                name="hour"
                value={formData.hour}
                onChange={handleInputChange}
                placeholder="Select a time"
              />
            </div>
            <div className="form-field-reservation">
              <select
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleSelectChange}
              >
                <option value=""></option>
                {quantityOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};
