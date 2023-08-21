import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from "./Content.module.scss";

const cx = classNames.bind(styles);

function Content({ children } : { children : ReactNode }) {
  
    return ( 
        <main className={cx("site-main")}>
            { children }
        </main>
     );
}

export default Content;