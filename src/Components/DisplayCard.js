import React from 'react';

import { MAIN_IMG_W, MAIN_IMG_H, REPO_URL, PROJECT_TITLE } from '../constants';

function DisplayCard(props) {
    const { title, subtitle, description, mainImageUrl } = props;

    // This flag can be changed later when some image URLs are deterministic.
    const randomImages = true;
    const refreshMsg = randomImages ? ' - Refresh this page to pick random images.' : '';

    // Note that an outer div added with className="card" will add a shadow and spacing within the card.
    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className={`image is-${MAIN_IMG_W}x${MAIN_IMG_H}`}>
                            <img className="is-rounded" src={mainImageUrl} alt="Small profile" />
                        </figure>
                    </div>

                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{subtitle}</p>
                    </div>
                </div>

                <p className="content">{description}</p>
                <br />

                <footer className="card-footer">
                    <p className="card-footer-item">
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
