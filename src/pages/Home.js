import React, { useState, useEffect } from "react";
import Nav from "../components/Navbar.js";
import Editor from "../components/Editor";
import useLocalStorage from "../hooks/useLocalStorage";

function Home() {
  const [hometemp, setHomeTemp] = useLocalStorage("Welcome!", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${hometemp}</body>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [hometemp]);

  return (
    <div>
  
      <Nav />

      <div className="home-pane">
      <Editor
          language="xml"
          displayName="Welcome to this community project!"
          value={"Let's see what we can all come up with...\n"}
          onChange={setHomeTemp}
        />
      </div>
      <div className="home-pane">
      <Editor
          language="xml"
          displayName="Welcome to this community project!"
          value={"Let's see what we can all come up with...\n"}
          onChange={setHomeTemp}
        />
      </div>
      <div className="home-pane">
      <Editor
          language="xml"
          displayName="Rules"
          value={"Let's see what we can all come up with...\n"}
          onChange={setHomeTemp}
        />
      </div>
    </div>
  );
}

export default Home;
