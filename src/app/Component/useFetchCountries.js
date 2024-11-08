"use client";
// useFetchCountries.js

import { useState, useEffect } from 'react';

const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Failed to fetch countries');
        }
        const data = await response.json();
        // Sort the countries alphabetically by their common name
        const sortedData = data.sort((a, b) => 
          (a.name.common > b.name.common) ? 1 : -1
        );
        setCountries(sortedData);
        console.log('Countries:', sortedData); // Log the fetched countries
      } catch (error) {
        setError(error.message);
        console.error('Error:', error.message); // Log the error
      } finally {
        setLoading(false);
        console.log('Loading state:', false); // Log the loading state
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
};

export default useFetchCountries;
