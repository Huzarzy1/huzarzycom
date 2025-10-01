import React, { useState, useEffect } from 'react';
// import '../styles/Bibleverse.css';

function Bibleverse() {
  const [verse, setVerse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomVerse = async () => {
      try {
        const response = await fetch('https://bible-api.com/data/web/random/nt');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setVerse(data);
        localStorage.setItem('verse', JSON.stringify(data));
        localStorage.setItem('verseDate', new Date().toDateString());
      } catch (err) {
        setError(err.message);
      }
    };

    const storedVerse = JSON.parse(localStorage.getItem('verse'));
    const storedDate = localStorage.getItem('verseDate');
    const today = new Date().toDateString();

    if (storedVerse && storedDate === today) {
      setVerse(storedVerse);
    } else {
      fetchRandomVerse();
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!verse) {
    return <div>Loading...</div>;
  }

  return (
    <div id='verse-header'>
      <h1>Today's Bible Verse</h1>
      <div id='verse-container'>
        <div id='verse'>
          <h2>
            {verse.random_verse.text}
          </h2>
          <p>{verse.random_verse.book} {verse.random_verse.chapter}:{verse.random_verse.verse}</p>
        </div>
      </div>
    </div>
      
  );
}

export default Bibleverse;
