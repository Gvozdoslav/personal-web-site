import React from 'react';
import '../App.css';
import avatar from '../avatar.png'

const About = () => (
    <section id="about" className="site-section">
        <h2 className="site-section__header">About Me</h2>
        <div className="site-section__about">
            <img className="site-section__image" src={avatar} alt="avatar"/>
            <p >Hi, I'm Rostislav Remizov, a passionate developer who loves creating beautiful web applications (especially backend).</p>
        </div>
    </section>
);

export default About;
