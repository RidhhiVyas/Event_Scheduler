import React from "react";

function Personal({ formData, setFormData }) {
  return (
    <>
      <form className="form">
        <div className="mb-3">
          <input
            type="text"
            className="form-control email border-0 shadow-sm p-2"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter First Name"
            required
            autocomplete="off"
            value={formData.firstName}
            onChange={(event) =>
              setFormData({ ...formData, firstName: event.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control phone border-0 shadow-sm p-2"
            id="phone"
            placeholder="Enter Last Name"
            required
            autocomplete="off"
            value={formData.lastName}
            onChange={(event) =>
              setFormData({ ...formData, lastName: event.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control border-0 shadow-sm p-2"
            required
            value={formData.address}
            onChange={(event) =>
              setFormData({ ...formData, address: event.target.value })
            }
            placeholder="Enter address"
          />
        </div>
      </form>
    </>
  );
}

export default Personal;
