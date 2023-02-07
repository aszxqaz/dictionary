import styles from "./Select.module.scss";
import arrow from "../assets/icons/arrow_down.svg";
import Image from "next/image";
import { useState } from "react";

type SelectProps = {
  options: string[];
  selectedOptionIndex: number;
  handleChange: (i: number) => void;
};

export const Select: React.FC<SelectProps> = ({
  options,
  selectedOptionIndex,
  handleChange,
}) => {
  const [isActive, setActive] = useState(false);
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        setActive((prev) => !prev);
      }}
    >
      <div className={styles.pointerWrapper}>
        <div className={styles.title}>{options[selectedOptionIndex]}</div>
        <div className={styles.arrow}>
          <Image src={arrow} alt="Options" />
        </div>
      </div>
      {isActive ? (
        <ul className={styles.optionslist}>
          {options.map((option, i) => (
            <li
              className={styles.optionsitem}
              key={option}
              onClick={() => {
                handleChange(i);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};