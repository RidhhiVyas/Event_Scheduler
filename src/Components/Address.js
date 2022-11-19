import React from "react";

function Address({ formData, setFormData }) {
  return (
    <>
      <form
        className="form"
        // style={{font-family: 'IBM Plex Sans Thai Looped', sans-serif;}}
      >
        <div className="mb-3">
          <input
            type="text"
            className="form-control email border-0 shadow-sm p-2"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter State"
            required
            autocomplete="off"
            value={formData.stAte}
            onChange={(event) =>
              setFormData({ ...formData, stAte: event.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control phone border-0 shadow-sm p-2"
            id="phone"
            placeholder="Enter City"
            required
            autocomplete="off"
            value={formData.city}
            onChange={(event) =>
              setFormData({ ...formData, city: event.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <input
            type="tel"
            className="form-control border-0 shadow-sm p-2"
            required
            value={formData.pinCode}
            onChange={(event) =>
              setFormData({ ...formData, pinCode: event.target.value })
            }
            placeholder="Area Pincode"
          />
        </div>
      </form>
    </>
  );
}

export default Address;
