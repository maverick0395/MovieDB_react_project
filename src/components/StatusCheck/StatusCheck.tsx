import {FC} from "react";

interface IProps {
    status: string | null
    error: string | null | undefined
}

const StatusCheck:FC<IProps> = ({status, error}) => {
    return (
        <>
            {status === 'pending' && <h1>Loading</h1>}
            {status === 'rejected' && <h1>{error}</h1>}
        </>
    );
};

export {StatusCheck};