import React from "react";
import Links from "./Links";

function About(props) {
  console.log(props)
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio === undefined || props.bio === "" ? "" : <p>{props.bio}</p>}
      <img src="https://1.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {props.links.github} linkedin = {props.links.linkedin}/>
    </div>
  );
}

export default About;