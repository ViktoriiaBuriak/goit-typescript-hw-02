import css from "./ErrorMessage.module.css";

function ErrorMessage() {
  return (
    <div className={css.errorMessage}>
      Whoops, something went wrong! Please try reloading this page!
    </div>
  );
}

export default ErrorMessage;
