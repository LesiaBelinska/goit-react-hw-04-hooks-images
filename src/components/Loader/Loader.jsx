import { TailSpin } from "react-loader-spinner";

import s from "./Loader.module.css";

export const Loader = () => {
    return (
        <div className={s.Loader}>
            <TailSpin
                height="100"
                width="100"
                color='rgb(59, 59, 207)'
                ariaLabel='loading'
            />
        </div>
    )
};
