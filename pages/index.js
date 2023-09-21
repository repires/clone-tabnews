import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [darkMode, setDarkMode] = useState(true); // Set dark mode as default

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const themeStyles = {
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#ddd' : '#333',
  };

  // Effect to run once when the component mounts
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-V3VBYLPPGK';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-V3VBYLPPGK');
    `;
    document.head.appendChild(script2);
  }, []);

  return (
    <div className={`d-flex justify-content-center align-items-center ${darkMode ? 'bg-dark' : 'bg-light'}`} style={{ minHeight: '100vh', paddingBottom: '2rem', marginBottom: '-2rem' }}>
      <style>
        {`
          @media (min-width: 1025px) {
            .custom-container {
              width: 80% !important;
            }
          }
        `}
      </style>
      <main className="container-fluid custom-container">
        <div className="card mx-auto shadow-lg rounded text-center p-4" style={{ maxWidth: '800px', ...themeStyles }}>
          <h1 className="h2 mb-4" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Hi{' '}
            <img
              src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
              alt="smiling face with sunglasses"
              className="img-fluid"
              style={{ height: '2rem', verticalAlign: 'middle' }}
            />
            My name is Renato (Ray) Pires and I'm back in the game! 😃
          </h1>
        </div>
      </main>
    </div>
  );
}

export default Home;
