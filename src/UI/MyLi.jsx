import React from "react";
import styles from "./li.module.css";

function MyLi({ children, ...props }) {
  return (
    <li {...props} className={styles.li}>
      {children}
    </li>
  );
}

export default MyLi;
