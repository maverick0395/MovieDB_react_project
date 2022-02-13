import {FC} from "react";

import css from "./UserLogo.module.css";

const UserLogo:FC = () => {
    return (
        <div className={css.user_logo}>
            U
        </div>
    );
};

export {UserLogo};