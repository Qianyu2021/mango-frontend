import React from 'react'
import axios from "axios";
import leaves from '../image/leaves.png'
import './home.css'

export default function Home() {
    return (
        <div className = 'home_container'>
            <div className='card'>
                <img src={leaves} />
                <h2>Hello, <span className="name">I am Qian!</span> Here is my story!</h2>
                <p>I had a previous career as a packaging engineer.</p>
                <p>During pandemic, I found I had a passion for technology<br/>and taught myself to code.</p>
                <p>I decided to start a new journey and<br/>I recently graduated with a computer science degree!</p>
                <p>I built this site to show off my personal software projects.</p>
            </div>
        </div>
    )
}