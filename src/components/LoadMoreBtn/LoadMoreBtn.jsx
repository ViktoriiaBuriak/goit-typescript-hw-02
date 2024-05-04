import { Link } from "react-scroll";
import css from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ loadMore }) {
  return (
    <div>
      <Link
        to="load-more-button"
        spy={true}
        smooth={true}
        offset={960}
        duration={2000}
      >
        <button
          className={css.loadBtn}
          onClick={loadMore}
          id="load-more-button"
        >
          Load More
        </button>
      </Link>
    </div>
  );
}

export default LoadMoreBtn;
