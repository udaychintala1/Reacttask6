
import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header className="App-header">
        
        <h1><i>My Portfolio</i></h1>
      </header>
      <main className="App-main">
        <section className="App-section" id="about">
          <h2>About Me</h2><br></br>
          <p>My name is chintala uday kiran.</p><br/>
          <p>I am a pre-final year student in Computer Science and Engineering  at Vellore Institute of Technology, AP.</p>
          <p> I had completed my schooling at Apswries school at karempudi.</p>
          <p> I had completed my intermediate studies at Narayana Junior College in Guntur.</p>
        </section>
        <section className="App-section" id="projects">
          <h2>Projects</h2>
          <ul>
            <li>Project 1: <button onClick={() => window.location.href = '#'}>Demo</button></li>
            <p>About fake face generation using GAN.</p>
            <li>Project 2: <button onClick={() => window.location.href = '#'}>Demo</button></li>
            <p>About Contact App creation using Android Studio.</p>
          </ul>
        </section>
        <section className="App-section" id="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
        </section>
        <section className="App-section colorful" id="contact">
          <h2>Contact Me</h2>
          <p>Contact me: <a href="mailto:udaychintala123@gmail.com">udaychintala123@gmail.com</a></p>
          <p>Phone Number: 9666699077</p>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;