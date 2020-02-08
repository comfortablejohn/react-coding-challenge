import './Grid.css';
import React from 'react';

import Placeholder from '../assets/img/placeholder.png';

export function Grid({ children }) {
    return <div className="grid gutter">{children}</div>;
}

export function GridItem({
    imageUrl,
    title,
}) {
    const [imageSrc, setImageSrc] = React.useState(null);

    React.useEffect(() => {
        if (imageUrl) {
            const tempImage = new Image();
            tempImage.onload = () => setImageSrc(tempImage.src);
            tempImage.src = imageUrl;
        }
    }, [imageUrl]);

    const style = {
        backgroundImage: `url(${Placeholder})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="grid-item">
            <a href="#">
                <div className="grid-item--image" style={style}>
                    <img src={imageSrc} />
                </div>
                <div className="grid-item--title">{title}</div>
            </a>
        </div>
    )
}