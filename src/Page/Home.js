import React from 'react'
import axios from "axios";

export default function Home() {
    return (
        <div className = 'container'>
            <header className='App-header'>
                <h1>WELCOME TO MY BLOG!</h1>
                <h2>Hello, <span className="name">I am Qian!</span></h2>
                <p>I am a recent computer science graduate student. Check out my blogs.</p>
                <p className="construction-message">It's still under construction.</p>
                <a href="/hire-me" className="hire-me">Hire me</a>
            </header>
        </div>
    )
}