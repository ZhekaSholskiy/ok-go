import {useState} from "react";

import styles from './counter.module.scss';

export const Counter = () => {
    const [state, setState] = useState(0);

    const handleClick = () => {
        setState(state => state + 1);
    }

    return <div>
        <h1>
            {state}
        </h1>
        <button className={styles.button} onClick={handleClick}>
            increment
        </button>
    </div>
}