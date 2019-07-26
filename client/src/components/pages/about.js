import React from "react";

function About() {
  return (
    <body className="home-cta text-center">
        <div>
            <h1 style={{ color: 'white', fontSize: 90, borderBottom: "2px solid white"}}>About Page</h1>
            <div style={{ color: 'white'}}>
                <h2>Brody Aldersley</h2>
                <p>
                    My main language is Java. I want to make games and am not a huge fan of web development. Sorry :D
                </p>
            </div>
            <br/>
            <div style={{ color: 'white'}}>
                <h2>Nicholas Chamberland</h2>
                <p>
                    I like long walks on the beach, leather bound books, and a nice pair of slacks.
                </p>
            </div>
        </div>
    </body>
    ); 
}

export default About;
