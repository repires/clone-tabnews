import React, { useState } from 'react';
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

  return (
    <div className={`d-flex justify-content-center align-items-center vh-100 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <main className="container-md">
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
          <p>
            As a computer engineer with many years of experience but no knowledge of new technologies with web development, I have recently sold my company and am now considering a career change. My wife has been an incredible source of motivation and support during this transition.
          </p>
          <p>
            Despite my hesitations and uncertainty about entering a new field, my wife has been encouraging me to explore the world of web development. She recognizes my passion for problem-solving and my eagerness to learn new things, and she believes that web development could be the perfect fit for me.
          </p>
          <p>
            My wife has been providing me with resources, such as online courses and tutorials, to help me gain the necessary skills to succeed in this field. She has also been connecting me with her network of professionals in the industry to offer guidance and advice.
          </p>
          <p>
            Most importantly, my wife's unwavering belief in me has given me the confidence to take the leap and pursue this new career path. Her encouragement and support have been invaluable, and I am grateful to have her by my side as I navigate this exciting new chapter in my life.
          </p>
          <button className={`btn mt-3 ${darkMode ? 'btn-light' : 'btn-dark'}`} onClick={toggleDarkMode}>
            Toggle {darkMode ? 'Light' : 'Dark'} Mode
          </button>
          <footer className="mt-4">Created and designed with ❤️ by Renato Pires</footer>
        </div>
      </main>
    </div>
  );
}

export default Home;
