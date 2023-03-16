import React from 'react';

function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <main>
        <div style={{ maxWidth: '800px', padding: '2rem', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Hi{' '}
            <img
              src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
              alt="smiling face with sunglasses"
              style={{ height: '2rem', verticalAlign: 'middle' }}
            />
            My name is Renato (Ray) Pires and I'm back in the game! 😃
          </h1>
          <p style={{ margin: '1rem 0' }}>
            As a computer engineer with many years of experience but no knowledge of new technologies with web development, I have recently sold my company and am now considering a career change. My wife has been an incredible source of motivation and support during this transition.
          </p>
          <p style={{ margin: '1rem 0' }}>
            Despite my hesitations and uncertainty about entering a new field, my wife has been encouraging me to explore the world of web development. She recognizes my passion for problem-solving and my eagerness to learn new things, and she believes that web development could be the perfect fit for me.
          </p>
          <p style={{ margin: '1rem 0' }}>
            My wife has been providing me with resources, such as online courses and tutorials, to help me gain the necessary skills to succeed in this field. She has also been connecting me with her network of professionals in the industry to offer guidance and advice.
          </p>
          <p style={{ margin: '1rem 0' }}>
            Most importantly, my wife's unwavering belief in me has given me the confidence to take the leap and pursue this new career path. Her encouragement and support have been invaluable, and I am grateful to have her by my side as I navigate this exciting new chapter in my life.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Home;
