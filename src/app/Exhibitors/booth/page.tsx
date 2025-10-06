'use client';

import React, { useState, useEffect } from 'react';
import api from '@/config/api';
import { useRouter } from 'next/navigation';

const AddBooth: React.FC = () => {
  const router = useRouter();
  const [exhibitorId, setExhibitorId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    boothNumber: '',
    boothLocation: '',
    mapLink: '',
    openTime: ''
  });
  const [distance, setDistance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedId = localStorage.getItem('exhibitorId');
    if (storedId) setExhibitorId(Number(storedId));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!exhibitorId) {
      console.log('Exhibitor ID not found');
      return;
    }

    setLoading(true);

    try {
      const response = await api.post('/booths', {
        exhibitorId,
        boothNumber: formData.boothNumber,
        boothLocation: formData.boothLocation,
        mapLink: formData.mapLink,
        openTime: formData.openTime
      });

      if (response.status === 200 || response.status === 201) {
        console.log('Booth added', response.data);
        setDistance(response.data.distance);
        // redirect to representatives page after success
        router.push('/exhibitor/add-representative');
      } else {
        console.log('Unexpected response', response.data);
      }
    } catch (err: any) {
      console.log('Error adding booth', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-4 gap-6">
      <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-medium text-gray-900 mb-6">Add Booth</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label>Booth Number*</label>
            <input
              type="text"
              name="boothNumber"
              value={formData.boothNumber}
              onChange={handleChange}
              placeholder="B12"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl"
              required
              disabled={loading}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Booth Location*</label>
            <input
              type="text"
              name="boothLocation"
              value={formData.boothLocation}
              onChange={handleChange}
              placeholder="Hall 3"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl"
              required
              disabled={loading}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Map Link</label>
            <input
              type="url"
              name="mapLink"
              value={formData.mapLink}
              onChange={handleChange}
              placeholder="https://maps.google.com/..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl"
              disabled={loading}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Open Time*</label>
            <input
              type="text"
              name="openTime"
              value={formData.openTime}
              onChange={handleChange}
              placeholder="10:00 AM"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl"
              required
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            className={`py-3 rounded-xl mt-4 text-white ${loading ? 'bg-red-400' : 'bg-red-600 hover:bg-red-700'}`}
            disabled={loading}
          >
            {loading ? 'Adding Booth...' : 'Add Booth'}
          </button>
        </form>

        {distance !== null && (
          <p className="mt-4 text-gray-700">Distance assigned by backend: {distance} meters</p>
        )}
      </div>
    </div>
  );
};

export default AddBooth;
