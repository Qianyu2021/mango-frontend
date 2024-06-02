import React from 'react'
import axios from "axios";

export default function Home() {
    return (
        <div className = 'home_container'>
            <header className='card'>
                <h1>My blog is still under construction.</h1>
                <h2>Hello, <span className="name">I am Qian!</span> Here is my story!</h2>
                <p>I am a recent computer science graduate student. I worked as a packaging engineer most of my career.</p>
                <p> I found my new passion in technologies and decided to start a new journey!</p>
                <p>I built this blog to track and share the recipes I tried and like.</p>
                <p>Check the Recipes page!</p>
              
            </header>
        </div>
    )
}