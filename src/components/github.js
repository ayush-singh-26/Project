import React, { useState } from 'react';

function Github() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const fetchGithubData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const userData = await response.json();
      setData(userData);
      setError(''); // Clear any previous errors
    } catch (err) {
      setError(err.message);
      setData(null); // Clear data on error
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    fetchGithubData();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='text-center my-3'>
        <label htmlFor="username" className='font-bold'>Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
          required
          className='p-2 border-2 rounded-sm'
        />
        <button type="submit" className='p-2 rounded-sm mx-2 bg-black text-white'>Search</button>
      </form>

      {error && <div className='error'>{error}</div>}

      {data && (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
          Github followers: {data.followers}
          <img src={data.avatar_url} alt="GitHub avatar" width={300} />
        </div>
      )}
    </>
  );
}

export default Github;
