import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from "./Content.module.scss";

interface Props {
  children: ReactNode;
}

const cx = classNames.bind(styles);

function Content({ children } : Props) {
  
    return ( 
        <main className={cx("site-main")}>
            { children }
        </main>
     );
}

export default Content;