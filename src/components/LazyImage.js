import React from 'react';
import './LazyImage.css';

export default function LazyImage({ imageUrl }) {
    // ref to observe when the image is in viewport
    const imageRef = React.useRef();
    const [imageSrc, setImageSrc] = React.useState();
    const [observer, setObserver] = React.useState();

    const imgClassname = imageSrc ? '' : 'loading';

    function loadImage(url) {
        const tempImage = new Image();
        tempImage.onload = () => setImageSrc(tempImage.src);
        tempImage.src = `${url}`;
    }

    function handleIntersect(entry) {
        // load image if the url is provided and hasn't already loaded
        if (entry.length && entry[0].isIntersecting && imageUrl && !imageSrc) {
            loadImage(imageUrl);
        }
    }

    React.useEffect(() => {
        if (imageRef.current && !observer) {
            let _observer = new IntersectionObserver(handleIntersect, {
                root: null,
                rootMargin: '160px',
                threshold: 0
            });
            _observer.observe(imageRef.current);
            setObserver(_observer);
        }
    }, [imageRef.current]);
    return <img className={imgClassname} src={imageSrc} ref={imageRef} />;
}
