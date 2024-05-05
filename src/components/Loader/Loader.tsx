import { Comment } from "react-loader-spinner";
import css from "./Loader.module.css";
import { FC } from "react";

const Loader: FC = () => {
  return (
    <div className={css.loader}>
      <Comment
        visible={true}
        height="120"
        width="120"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#F4442E"
      />
    </div>
  );
};

export default Loader;
