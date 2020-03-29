import React from 'react';

// Even if you fork this repo, please leave use URL as is to link back to the original rpeo.
const REPO_URL = 'https://github.com/MichaelCurrin/instant-website';
// But this can be changed if you like.
const PROJECT_TITLE = 'Instant Website';

function DisplayCard(props) {
    const { title, subtitle, description, mainImageValues } = props;

    // This flag can be changed later when some image URLs are deterministic.
    const randomImages = true;
    const refreshMsg = randomImages ? ' - Refresh this page to pick random images.' : '';

    // Note that an outer div added with class="card" will add a shadow and spacing within the
    return (
        <div class="card is-wide">
            <div class="card-content ">
                <div class="media">
                    <div class="media-left">
                        <figure className={`image is-${mainImageValues.width}x${mainImageValues.height}`}>
                            <img class="is-rounded" src={mainImageValues.url} alt="Small profile" />
                        </figure>
                    </div>

                    <div class="media-content">
                        <p class="title is-4">{title}</p>
                        <p class="subtitle is-6">{subtitle}</p>
                    </div>
                </div>

                <p class="content">{description}</p>

                <footer class="card-footer">
                    <p class="card-footer-item">
                        <span>
                            Made with <a href={REPO_URL}>{PROJECT_TITLE}</a>
                            {refreshMsg}
                        </span>
                    </p>
                </footer>
            </div>
        </div>
    );
}

export default DisplayCard;
