import React from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../redux/actions/counterAction";
import styles from "./Sections.module.css";

const MathematicalOperationResult = () => {
  const count = useSelector(selectCount);
  return (
    <div>
      <span className={styles.value}>{count ? count : 0}</span>
    </div>
  );
};

export default MathematicalOperationResult;
