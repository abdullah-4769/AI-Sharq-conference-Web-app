'use client';

import React, { useState, useEffect } from 'react';
import api from '@/config/api';
import { useRouter } from 'next/navigation';
import { FaRobot, FaLaptop, FaMobileAlt, FaHeadphones, FaCamera, FaBox } from 'react-icons/fa';

const AddSponsorProduct: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [sponsorId, setSponsorId] = useState<number | null>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedId = localStorage.getItem('sponsorId');
    if (storedId) setSponsorId(Number(storedId));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getIconByTitle = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes('ai')) return <FaRobot className="text-red-600 text-2xl" />;
    if (lower.includes('electronic')) return <FaLaptop className="text-red-600 text-2xl" />;
    if (lower.includes('mobile')) return <FaMobileAlt className="text-red-600 text-2xl" />;
    if (lower.includes('headphone')) return <FaHeadphones className="text-red-600 text-2xl" />;
    if (lower.includes('camera')) return <FaCamera className="text-red-600 text-2xl" />;
    return <FaBox className="text-red-600 text-2xl" />;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sponsorId) {
      console.log('Sponsor ID not found');
      return;
    }

    setLoading(true);

    try {
      const response = await api.post('/sponsor-related/products', {
        sponsorId,
        title: formData.title,
        description: formData.description,
      });

      if (response.status === 200 || response.status === 201) {
        console.log('Success: Product added', response.data);
        setProducts(prev => [
          ...prev,
          { ...response.data, icon: getIconByTitle(response.data.title) },
        ]);
        setFormData({ title: '', description: '' });
      } else {
        console.log('Rejected: Unexpected response', response.data);
      }
    } catch (err: any) {
      console.log('Error adding product', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-4 gap-8">
      <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-10 w-full max-w-lg">
        <h1 className="text-2xl font-medium text-gray-900 mb-6">Add Sponsor Product</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label>Product Title*</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Product Title"
              className="w-full px-5 py-4 border border-gray-300 rounded-xl"
              required
              disabled={loading}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Product Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Product Description"
              rows={4}
              className="w-full px-5 py-4 border border-gray-300 rounded-xl resize-none"
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className={`py-4 rounded-xl mt-4 text-white ${loading ? 'bg-red-400' : 'bg-red-600 hover:bg-red-700'}`}
            disabled={loading}
          >
            {loading ? 'Adding Product...' : 'Add Product'}
          </button>
        </form>
      
      
    

      </div>
  <div className="flex justify-center mt-4">
  <button
    type="button"
    onClick={() => router.push('/sponser/representatives')}
    className="w-full py-4 rounded-xl text-gray-900 border border-gray-300 hover:bg-gray-100"
  >
    Go to Representatives
  </button>
</div>
      {products.length > 0 && (
        <div className="w-full max-w-lg flex flex-col gap-4">
          <h2 className="text-xl font-medium text-gray-900">Added Products</h2>
          {products.map((product, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 border border-gray-300 rounded-xl bg-white shadow-sm"
            >
              <div>{product.icon}</div>
              <div className="flex flex-col">
                <span className="font-medium">{product.title}</span>
                <span className="text-gray-500">{product.description}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddSponsorProduct;
