'use client'

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store/store'
import api from '@/config/api'

const SetUpYourProfile: React.FC = () => {
  const userId = useSelector((state: RootState) => state.user.userId)

  const [formData, setFormData] = useState({
    bio: '',
    expertise: '',
    website: '',
    facebook: '',
    linkedin: '',
    orgInput: '',
    tagInput: '',
    country: 'Pakistan', 
  })

  const [designations, setDesignations] = useState<string[]>(['Middle East Institute'])
  const [tags, setTags] = useState<string[]>(['workshop', 'Innovation'])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleOrgKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const trimmed = formData.orgInput.trim()
      if (trimmed && !designations.includes(trimmed)) {
        setDesignations(prev => [...prev, trimmed])
        setFormData(prev => ({ ...prev, orgInput: '' }))
      }
    }
  }

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const trimmed = formData.tagInput.trim()
      if (trimmed && !tags.includes(trimmed)) {
        setTags(prev => [...prev, trimmed])
        setFormData(prev => ({ ...prev, tagInput: '' }))
      }
    }
  }

  const removeDesignation = (d: string) => setDesignations(prev => prev.filter(item => item !== d))
  const removeTag = (t: string) => setTags(prev => prev.filter(item => item !== t))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
      userId,
      designations,
      bio: formData.bio,
      expertise: formData.expertise.split(',').map(e => e.trim()).filter(Boolean),
      website: formData.website || null,
      facebook: formData.facebook || null,
      linkedin: formData.linkedin || null,
      tags,
      country: formData.country,
      category: null,
      youtube: null,
      twitter: null,
      featured: true,
      verified: true,
      priority: 1,
      isActive: true,
    }

    console.log('Submitting payload:', payload)

    try {
      const res = await api.post('/speakers', payload)
      console.log('Saved:', res.data)
    } catch (err: any) {
      console.error('API Error:', err.response?.data || err.message)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-10 w-full max-w-lg">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-2xl font-medium text-gray-900 text-center">Set Up Your Speaker Profile</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            {/* Organization / Affiliation */}
            <div className="flex flex-col gap-3">
              <label className="text-base text-gray-900">Organization / Affiliation*</label>
              <input
                type="text"
                name="orgInput"
                value={formData.orgInput}
                onChange={handleInputChange}
                onKeyDown={handleOrgKeyDown}
                placeholder="Type and press Enter"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <div className="flex flex-wrap gap-3 mt-2">
                {designations.map((d, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-yellow-200 text-yellow-800 rounded-full text-sm font-medium flex items-center gap-2"
                  >
                    {d}
                    <button
                      type="button"
                      onClick={() => removeDesignation(d)}
                      className="text-yellow-800 hover:text-yellow-900"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-col gap-3">
              <label className="text-base text-gray-900">Specility</label>
              <input
                type="text"
                name="tagInput"
                value={formData.tagInput}
                onChange={handleInputChange}
                onKeyDown={handleTagKeyDown}
                placeholder="Keynote Speaker, Workshop"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <div className="flex flex-wrap gap-3 mt-2">
                {tags.map((t, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-green-200 text-green-800 rounded-full text-sm font-medium flex items-center gap-2"
                  >
                    {t}
                    <button
                      type="button"
                      onClick={() => removeTag(t)}
                      className="text-green-800 hover:text-green-900"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Expertise */}
            <div className="flex flex-col gap-3">
              <label className="text-base text-gray-900">Expertise </label>
              <input
                type="text"
                name="expertise"
                value={formData.expertise}
                onChange={handleInputChange}
                placeholder="AI, ML, NLP"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              <label className="text-base text-gray-900">Website</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="https://example.com"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <label className="text-base text-gray-900">Facebook</label>
              <input
                type="url"
                name="facebook"
                value={formData.facebook}
                onChange={handleInputChange}
                placeholder="https://facebook.com/example"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <label className="text-base text-gray-900">LinkedIn</label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
                placeholder="https://linkedin.com/in/example"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Biography */}
            <div className="flex flex-col gap-3">
              <label className="text-base text-gray-900">Biography</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                placeholder="Describe yourself"
                rows={4}
                className="w-full px-5 py-4 border border-gray-300 rounded-xl text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="py-4 bg-red-600 text-white rounded-xl font-medium text-base hover:bg-red-700 transition-colors"
            >
              Save & Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SetUpYourProfile
