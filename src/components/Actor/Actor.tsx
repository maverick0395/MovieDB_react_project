import {FC} from "react";
import {NavLink} from "react-router-dom";

import {smallImageBaseURL} from "../../constants/image.base.url";
import {IActor} from "../../interfaces/";

interface IProps {
    actor: IActor
}

const Actor: FC<IProps> = ({actor}) => {
    return (
        <NavLink to={`/movies/actor/${actor.id}`} state={actor}>
            {actor.profile_path && <img src={`${smallImageBaseURL}${actor.profile_path}`} alt={actor.name}/>}
            <h3>{actor.name}</h3>
        </NavLink>

    );
};

export {Actor};