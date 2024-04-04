import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";
function ButtonBack() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(-1);
        console.log("ButtonBack clicked");
      }}
      className={`${styles.back} ${styles.btn}`}
    >
      &larr; Back
    </button>
  );
}

export default ButtonBack;
