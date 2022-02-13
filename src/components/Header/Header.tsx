import {FC} from "react";
import {NavLink, Outlet} from "react-router-dom";
import {useLocalStorage} from "react-use";

import {UserLogo} from "../UserLogo/UserLogo";
import css from "./Header.module.css";

const Header: FC = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    const switchTheme = ():void => {
        const newTheme = theme === 'light'? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <div className={css.body}  data-theme={theme}>
            <div className={css.header}>
                <div className={css.menu}>
                    <NavLink className={css.logo} to={'/movies'}>The MovieDB</NavLink>
                    <NavLink to={'/movies'}>Movies</NavLink>
                    <NavLink to={'/genres'}>Genres</NavLink>
                    <NavLink to={'/search'}>Search</NavLink>
                    <div className={css.switcher}>
                        <span className={css.switcher_text}>{theme === 'light'? 'Dark': 'Light'} Theme</span>
                        <label className={css.switch}>
                        <input type="checkbox" onClick={switchTheme}/>
                        <span className={`${css.slider} ${css.round}`}/>
                    </label>
                    </div>
                    <UserLogo/>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export {Header};