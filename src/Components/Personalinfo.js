import React from "react";

function Personalinfo({ formData, setFormData }) {
  return (
    <div>
      <form
        className="form"
        // style={{font-family: 'IBM Plex Sans Thai Looped', sans-serif;}}
      >
        <div className="mb-3">
          <input
            type="date"
            className="form-control email border-0 shadow-sm p-2"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Date of Birth"
            required
            autocomplete="off"
            value={formData.dOb}
            onChange={(event) =>
              setFormData({ ...formData, dOb: event.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control phone border-0 shadow-sm p-2"
            id="phone"
            placeholder="Enter Father's Name"
            required
            autocomplete="off"
            value={formData.fatherName}
            onChange={(event) =>
              setFormData({ ...formData, fatherName: event.target.value })
            }
          />
        </div>

        <div className="mb-3">
          Gender: Male
          <input
            type="radio"
            name="myGender"
            className="form-check-input shadow-sm p-2"
            required
            value={formData.gender}
            onChange={(event) =>
              setFormData({ ...formData, gender: event.target.value })
            }
          />{" "}
          Female
          <input
            type="radio"
            name="myGender"
            className="form-check-input  shadow-sm p-2 ms-2 me-2"
            required
            value={formData.gender}
            onChange={(event) =>
              setFormData({ ...formData, gender: event.target.value })
            }
          />
          Others
          <input
            type="radio"
            name="myGender"
            className="form-check-input shadow-sm p-2"
            required
            value={formData.gender}
            onChange={(event) =>
              setFormData({ ...formData, gender: event.target.value })
            }
          />
        </div>
      </form>
    </div>
  );
}

export default Personalinfo;
