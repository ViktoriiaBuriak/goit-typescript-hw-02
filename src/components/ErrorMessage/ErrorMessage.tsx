import { FC } from "react";
import css from "./ErrorMessage.module.css";

const ErrorMessage: FC = () => {
  return (
    <div className={css.errorMessage}>
      Whoops, something went wrong! Please try reloading this page!
    </div>
  );
};

export default ErrorMessage;
