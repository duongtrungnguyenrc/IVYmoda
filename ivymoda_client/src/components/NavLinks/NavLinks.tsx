import classNames from "classnames/bind";
import styles from "./NavLinks.module.scss";

const cx = classNames.bind(styles);

function NavLinks() {
    return ( 
        <div className={cx("nav-links")}>
            <ul>
                <li><a title="Trang chủ" href="">Trang chủ</a></li>
                <li><a title="Áo" href="">Áo</a></li>
                <li><a title="Áo sơ mi" href="">Áo sơ mi</a></li>
            </ul>
        </div>
     );
}

export default NavLinks;