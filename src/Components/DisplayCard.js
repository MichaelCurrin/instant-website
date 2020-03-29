import React from 'react';

import { MAIN_IMG_W, MAIN_IMG_H, REPO_URL, PROJECT_TITLE } from '../constants';

function DisplayCard(props) {
    const { title, subtitle, description, mainImageUrl } = props;

    // This flag can be changed later when some image URLs are deterministic.
    const randomImages = true;
    const refreshMsg = randomImages ? ' - Refresh this page to pick random images.' : '';

    // Note that an outer div added with class="card" will add a shadow and spacing within the card.
    return (
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure className={`image is-${MAIN_IMG_W}x${MAIN_IMG_H}`}>
                            <img class="is-rounded" src={mainImageUrl} alt="Small profile" />
                        </figure>
                    </div>

                    <div class="media-content">
                        <p class="title is-4">{title}</p>
                        <p class="subtitle is-6">{subtitle}</p>
                    </div>
                </div>

                <p class="content">{description}</p>
                <br />

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
