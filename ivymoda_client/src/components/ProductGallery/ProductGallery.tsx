import { useRef, useState, useCallback, memo } from "react";
import classNames from "classnames/bind";

import styles from "./ProductGallery.module.scss";
import { ChevronDownIcon, ChevronUpIcon } from "../../assets/Icons";

const cx = classNames.bind(styles);

interface coordinatesModel {
  x: number;
  y: number;
}

function MainGalleryImage() {

    const [ isHover, setIsHover ] = useState(false);
    const [mouseCoordinates, setMouseCoordinates] = useState<coordinatesModel>({
        x: 0,
        y: 0,
    });

    const galleryFrameRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        galleryFrameRef.current && setMouseCoordinates({
            x: event.clientX - galleryFrameRef.current.offsetLeft,
            y: event.clientY - galleryFrameRef.current.offsetTop,
        });
        setIsHover(true);
    }, []);  

    const style = {
        backgroundImage: `url(https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/05/26/13a3f6fc5511638de816015d7a23dc3e.jpg)`,
        transform : isHover ? "scale(2)" : "scale(1)", 
        transformOrigin: galleryFrameRef.current ? `${mouseCoordinates.x / galleryFrameRef.current.clientWidth * 100}% ${mouseCoordinates.y / galleryFrameRef.current.clientHeight * 100}%` : undefined
    };

    return (
        <div ref={galleryFrameRef} className={cx("main-gallery-frame")} onMouseMove={handleMouseMove} onMouseLeave={() => setIsHover(false)}>
            <div className={cx("main-gallery-image")} style={style}/>
        </div>
    );
};

const MemoizedMainGalleryImage = memo(MainGalleryImage);

function ProductGallery() {

    return (
        <div className={cx("product-gallery")}>
            <MemoizedMainGalleryImage/>
            <div className={cx("side-gallery-frame")}>
                <button>
                    <ChevronUpIcon/>
                </button>
                <div className={cx("slider-gallery")}>
                    <div className={cx("slider-gallery-item")}>
                        <img src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/05/26/9e0d57e81881107c1c1a7b26cb6b556a.jpg" alt="" />
                    </div>
                    <div className={cx("slider-gallery-item")}>
                        <img src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/05/26/9e0d57e81881107c1c1a7b26cb6b556a.jpg" alt="" />
                    </div>
                    <div className={cx("slider-gallery-item")}>
                        <img src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/05/26/9e0d57e81881107c1c1a7b26cb6b556a.jpg" alt="" />
                    </div>
                    <div className={cx("slider-gallery-item")}>
                        <img src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/05/26/9e0d57e81881107c1c1a7b26cb6b556a.jpg" alt="" />
                    </div>
                    <div className={cx("slider-gallery-item")}>
                        <img src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/05/26/9e0d57e81881107c1c1a7b26cb6b556a.jpg" alt="" />
                    </div>
                </div>
                <button>
                    <ChevronDownIcon/>
                </button>
            </div>
        </div>
    );
}

export default memo(ProductGallery);