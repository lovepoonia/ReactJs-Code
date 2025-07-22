import React from "react";
import ReactDOM from "react-dom/client"; 

const Heading = React.createElement("h1", {id:"Heading"}, "Episode 3");

const jsxHeading = <h1 id="Heading">Episode 3 jsx</h1>

const HeadingComponent = () => (
<div>
<h1 id="Heading">Episode 3 Component</h1>
    {Heading}
    {jsxHeading}
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
