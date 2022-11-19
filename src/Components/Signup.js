import React from "react";

function Signup({ formData, setFormData }) {
  return (
    <>
      <form
        className="form"
        // style={{font-family: 'IBM Plex Sans Thai Looped', sans-serif;}}
      >
        <div className="mb-3">
          <input
            type="email"
            className="form-control email border-0 shadow-sm p-2"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter Your Email"
            required
            autocomplete="off"
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <input
            type="tel"
            className="form-control phone border-0 shadow-sm p-2"
            id="phone"
            placeholder="Enter Contact Number"
            required
            autocomplete="off"
            value={formData.phone}
            onChange={(event) =>
              setFormData({ ...formData, phone: event.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control border-0 shadow-sm p-2"
            value={formData.password}
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
            placeholder="Enter Password"
          />
        </div>
      </form>
    </>
  );
}

export default Signup;
