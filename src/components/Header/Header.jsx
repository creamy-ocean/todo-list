import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import React, { useContext } from "react";
import styles from "./Header.module.css";
import { useDarkMode } from "../../context/DarkModeContext";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button className={styles.toggle} onClick={toggleDarkMode}>
        {!darkMode ? <MdDarkMode /> : <BsSunFill />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                value === filter && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
