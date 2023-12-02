import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/actions/counterAction";

import styles from "./Sections.module.css";

const MathematicalOperations = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} onClick={() => dispatch(increment())}>
          1 ekle
        </button>

        <button className={styles.button} onClick={() => dispatch(decrement())}>
          1 çıkar
        </button>
      </div>
    </div>
  );
};

export default MathematicalOperations;
