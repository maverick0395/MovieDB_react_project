import {FC} from "react";

import css from "./Pagination.module.css";

interface IProps {
    changePage: (value: number) => void
    currentPage: number
}

const Pagination: FC<IProps> = ({changePage, currentPage}) => {
    return (
        <div className={css.pagination}>
            {currentPage !== 1 && <button onClick={() => changePage(-1)}>Prev page</button>}
            <button onClick={() => changePage(1)}>Next page</button>
        </div>
    );
};

export {Pagination};