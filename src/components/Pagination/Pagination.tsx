import "./Pagination.scss";
import { FormEventHandler } from "react";

type PaginationProps = {
  cardsPerPage: number;
  totalCards: number;
  currentPage: number;
  handlChangePage: FormEventHandler<HTMLAnchorElement>;
};

const Pagination = ({
  cardsPerPage,
  totalCards,
  currentPage,
  handlChangePage,
}: PaginationProps) => {
  const pageNumbers: number[] = [];
  for (let index = 1; index <= Math.ceil(totalCards / cardsPerPage); index++) {
    pageNumbers.push(index);
  }
  const displayedPagination = pageNumbers.map((number) => {
    return (
      <a
        key={number}
        onClick={handlChangePage}
        className={
          number == currentPage
            ? "pagination__number active"
            : "pagination__number"
        }
      >
        {" "}
        {number}{" "}
      </a>
    );
  });

  return <div className="pagination">{displayedPagination}</div>;
};

export default Pagination;
