import { useState } from "react";

export default function BrandForm() {
  const [formData, setFormData] = useState({
    website: "",
    yearFounded: "",
    headquarters: "",
    productTypes: "",
    monthlyOrders: "",
    ecommercePlatforms: "",
    shippingDestinations: "",
    fulfillmentChallenges: "",
    name: "",
    email: "",
    phone: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://api.airtable.com/v0/tbl35MTrOkhhVgzbo", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer patRxSJXc1LeyAH5p.e767f963a6655481d7881698e2eab6b4b2c465836ac7880d77297eb93d62eee3",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          records: [
            {
              fields: formData
            }
          ]
        })
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Submission failed. Check the API Key or Table ID.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form");
    }
  };

  if (submitted) {
    return <div className="text-center p-10 text-green-600">Thank you! 🎉</div>;
  }

  return (
    <form
      className="max-w-3xl mx-auto px-6 py-10 space-y-6 bg-white shadow rounded"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-bold text-center text-blue-900">
        Brand Intake Form
      </h1>

      <div>
        <label className="block font-medium">Website *</label>
        <input
          type="url"
          name="website"
          className="w-full border px-3 py-2 rounded"
          required
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block font-medium">Year Founded *</label>
        <input
          type="number"
          name="yearFounded"
          className="w-full border px-3 py-2 rounded"
          required
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block font-medium">Headquarters Location *</label>
        <input
          type="text"
          name="headquarters"
          className="w-full border px-3 py-2 rounded"
          required
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block font-medium">Product Types</label>
        <input
          type="text"
          name="productTypes"
          className="w-full border px-3 py-2 rounded"
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block font-medium">Monthly Order Volume</label>
        <input
          type="text"
          name="monthlyOrders"
          className="w-full border px-3 py-2 rounded"
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block font-medium">Ecommerce Platforms</label>
        <input
          type="text"
          name="ecommercePlatforms"
          className="w-full border px-3 py-2 rounded"
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block font-medium">Shipping Destinations</label>
        <input
          type="text"
          name="shippingDestinations"
          className="w-full border px-3 py-2 rounded"
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block font-medium">Fulfillment Challenges</label>
        <textarea
          name="fulfillmentChallenges"
          className="w-full border px-3 py-2 rounded"
          rows={3}
          onChange={handleChange}
        />
      </div>

      <hr className="my-6" />

      <div>
        <label className="block font-medium">Contact Name *</label>
        <input
          type="text"
          name="name"
          className="w-full border px-3 py-2 rounded"
          required
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block font-medium">Email *</label>
        <input
          type="email"
          name="email"
          className="w-full border px-3 py-2 rounded"
          required
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block font-medium">Phone Number</label>
        <input
          type="tel"
          name="phone"
          className="w-full border px-3 py-2 rounded"
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="mt-6 bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
