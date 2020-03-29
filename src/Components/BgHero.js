import React from 'react';

function BgHero(props) {
    const { image } = props;
    const style = { backgroundImage: image };

    return <section id="bg" class="hero is-fullheight" style={style} role="img" aria-label="Random background" />;
}

export default BgHero;
