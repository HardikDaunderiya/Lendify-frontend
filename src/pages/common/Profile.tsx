import React, { useState, useEffect } from 'react';
import { getAccessToken } from '@/lib/helper';
import { Camera } from 'lucide-react';

const Profile = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const name = "John Doe";
  const email = "john@example.com";
  const bio = "Hi, I'm John Doe. I'm a software engineer and I love to code!";

  useEffect(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleProfilePicUpload = async () => {
    if (!selectedFile) {
      setError("Please select an image to upload.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData();
    formData.append('image', selectedFile);
    const token = getAccessToken();

    try {
      const response = await fetch('http://localhost:8000/api/v1/users/uploadImage', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to upload image: ${errorText}`);
      }

      setSuccess(true);
      alert('Profile picture updated successfully!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-6 lg:px-8 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center mb-8">
        <div className="relative">
          <img
            src={preview || 'https://via.placeholder.com/150'}
            alt="Profile Preview"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
          />
          <label htmlFor="file-upload" className="absolute bottom-0 right-0 bg-gray-800 text-white rounded-full p-1 cursor-pointer">
          <Camera className="w-6 h-6 bg-black" />
          </label>
          <input id="file-upload" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        </div>
        <h3 className="text-xl font-bold mt-4">{name}</h3>
        <p className="text-gray-600">{email}</p>
      </div>
      
      <div className="bg-gray-100 p-6 rounded-lg">
        <h4 className="text-lg font-bold mb-4">Profile Details</h4>
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              readOnly
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea
              value={bio}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              readOnly
              rows={3}
            />
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <button
          onClick={handleProfilePicUpload}
          className="inline-flex justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          disabled={loading}
        >
          {loading ? 'Uploading...' : 'Upload Profile Picture'}
        </button>
      </div>
      
      {error && <p className="mt-4 text-center text-red-600">{error}</p>}
      {success && (
        <p className="mt-4 text-center text-green-600">Profile picture updated successfully!</p>
      )}
    </div>
  );
};

export default Profile;










