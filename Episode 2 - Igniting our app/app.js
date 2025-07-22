import React from "react";
import ReactDOM from "react-dom"; 

var heading = React.createElement("div", {id: "parent"}, 
    [React.createElement("div", {id: "child"}, 
        [React.createElement("h1", {id: "hello"}, "Hello Love" ), 
            React.createElement("h1", {id: "hello2"}, "hii" )]),
            React.createElement("div", {id: "child2"} , 
                [React.createElement("h1", {id: "hello2"}, "Hello Love" ),
                     React.createElement("h1", {id: "hello2"}, "hii" )])]);
        
var root = ReactDOM.createRoot(document.getElementById("root"));

        
root.render(heading);