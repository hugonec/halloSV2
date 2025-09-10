import React, { useState } from 'react';

const ThreePLForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    yearFounded: '',
    headquarters: '',
    capabilities: '',
    techStack: '',
    shippingRegions: '',
    clientProfile: '',
    leadHandling: '',
    facilityDetails: '',
    contactName: '',
    contactEmail: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const res = await fetch('https://api.airtable.com/v0/tblly70sOOrz9nOAz', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer patRxSJXc1LeyAH5p.e767f963a6655481d7881698e2eab6b4b2c465836ac7880d77297eb93d62eee3',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: formData,
            },
          ],
        }),
      });

      if (res.ok) {
        setStatus('Submitted successfully!');
        setFormData({
          companyName: '',
          website: '',
          yearFounded: '',
          headquarters: '',
          capabilities: '',
          techStack: '',
          shippingRegions: '',
          clientProfile: '',
          leadHandling: '',
          facilityDetails: '',
          contactName: '',
          contactEmail: '',
        });
      } else {
        setStatus('Failed to submit');
      }
    } catch (error) {
      setStatus('Error: ' + error.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">3PL Intake Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          ['companyName', 'Company Name'],
          ['website', 'Website'],
          ['yearFounded', 'Year Founded'],
          ['headquarters', 'Headquarters Location'],
          ['capabilities', 'Capabilities Overview'],
          ['techStack', 'Technology Stack'],
          ['shippingRegions', 'Shipping Regions'],
          ['clientProfile', 'Ideal Client Profile'],
          ['leadHandling', 'Lead Management Process'],
          ['facilityDetails', 'Facilities Overview'],
          ['contactName', 'Contact Name'],
          ['contactEmail', 'Contact Email'],
        ].map(([name, label]) => (
          <div key={name}>
            <label htmlFor={name} className="block font-medium text-gray-700">
              {label}
            </label>
            <input
              required
              type={name.includes('Email') ? 'email' : 'text'}
              id={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
    </div>
  );
};

export default ThreePLForm;

