import React from "react";

function Contact() {
  return (
    <body className="home-cta text-center">
        <div>
        <h1 style={{ color: 'white', fontSize: 90}}>Contact Page</h1>
        <br/>
        <div style={{ color: 'white', border: "2px solid white" }}>
            <h2>Brody Aldersley</h2>
            <p>Email: brody@custom.ca</p>
            <p>Phone: 519-820-1234</p>
            <p>
                I don't know what i'm doing but it seems to work?
            </p>
        </div>
        <br/>
        <div style={{ color: 'white', border: "2px solid white" }}>
            <h2>Nicholas Chamberland</h2>
            <p>Email: nicholas@custom.ca</p>
            <p>Phone: 519-820-4321</p>
            <p>
                It doesn't take rocket appliances.
            </p>
        </div>
        <br/>
        <footer className="footer">
            <p>
                The information on this page is for filler purposes only. The emails and numbers are not real.
            </p>
        </footer>
        </div>
    </body>

  );
}

export default Contact;
