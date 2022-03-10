import React from "react";
import Styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={Styles.footer}>
      <h2>COVID-19 Tracker</h2>
      <p>
        &copy; <span> {year} </span>  
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/sanusisusi"
        >
          Sanusi Abdulkadir
        </a>
        <br/>Software Engineer (React developer)
      </p>
    </footer>
  );
}
