import React from 'react';

import Facebook from '../../assets/facebook-white.svg';
import FacebookBlue from '../../assets/facebook-blue.svg';
import Instagram from '../../assets/instagram-white.svg';
import InstagramBlue from '../../assets/instagram-blue.svg';
import Twitter from '../../assets/twitter-white.svg';
import TwitterBlue from '../../assets/twitter-blue.svg';

/**
 * Renders svg, handling hover state and passing appropraite fill colour to
 * render prop
 *
 * @param {Object} props
 * @param {*} props.children
 */
function HoverSVG(props) {
    const fill = hovered ? '#018fff' : '#FFF';

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={handleMouseIn}
            onMouseOut={handleMouseOut}
            {...props}
            fill={fill}
        >
            {props.children}
        </svg>
    );
}

function SocialLink({ image, imageHover, children }) {
    const [hovered, setHovered] = React.useState(false);

    function handleMouseIn(event) {
        setHovered(true);
    }

    function handleMouseOut(event) {
        setHovered(false);
    }

    React.useEffect(() => {
        // hacky way to force load of image into cache prior to hover to avoid
        // flicker after first time it is hovered - altrenative would
        // be to use sprite sheet and change position of background
        const hoverImg = new Image();
        hoverImg.src = imageHover;
    }, []);

    const bgImage = hovered ? imageHover : image;
    return (
        <a
            onMouseEnter={handleMouseIn}
            onMouseOut={handleMouseOut}
            className="ul-socials__icon"
            style={{ backgroundImage: `url(${bgImage})` }}
            href="#"
        >
            {children}
        </a>
    );
}

export default function Socials() {
    return (
        <ul className="ul-socials">
            <li>
                <SocialLink image={Facebook} imageHover={FacebookBlue}>
                    <span className="hidden">Follow Stan on Facebook</span>
                </SocialLink>
            </li>
            <li>
                <SocialLink image={Instagram} imageHover={InstagramBlue}>
                    <span className="hidden">Follow Stan on Instagram</span>
                </SocialLink>
            </li>
            <li>
                <SocialLink image={Twitter} imageHover={TwitterBlue}>
                    <span className="hidden">Follow Stan on Twitter</span>
                </SocialLink>
            </li>
        </ul>
    );
}
