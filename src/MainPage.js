import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';

const MAIN_IMG_W = 128,
    MAIN_IMG_H = 128,
    BG_IMG_W = 1600,
    BG_IMG_H = 900;
const REPO_URL = 'https://github.com/MichaelCurrin/instant-website';

/**
 * Specify how the URL gets decoded here.
 *
 * Optionally use `queryParam: 'fooInUrl'` after type for custom name.
 */
const urlPropsQueryConfig = {
    title: { type: UrlQueryParamTypes.string },
    subtitle: { type: UrlQueryParamTypes.string },
    description: { type: UrlQueryParamTypes.string },
    mainImage: { type: UrlQueryParamTypes.string },
    bgImage: { type: UrlQueryParamTypes.string }
};

function imageSearchUrl(keyword, w, h) {
    return `https://source.unsplash.com/${w}x${h}/?${keyword}`;
}

class MainPage extends PureComponent {
    static propTypes = {
        title: PropTypes.string,
        subtitle: PropTypes.string,
        description: PropTypes.string,
        mainImage: PropTypes.string,
        bgImage: PropTypes.string,

        // Change handlers are automatically generated and passed if a config is provided and
        // `addChangeHandlers` isn't false. They use `replaceIn` by default, just updating that
        // single query parameter and keeping the other existing ones.
        onChangeTitle: PropTypes.func,
        onChangeSubtitle: PropTypes.func,
        onChangeDescription: PropTypes.func,
        onChangeMainImage: PropTypes.func,
        onChangeBgImage: PropTypes.func,

        onChangeUrlQueryParams: PropTypes.func
    };

    // Note: These do not appear in the URL initially.
    static defaultProps = {
        title: 'Your title',
        subtitle: 'Your title',
        description: 'Your description',
        mainImage: 'water',
        bgImage: 'nature'
    };

    render() {
        const {
            title,
            subtitle,
            description,
            mainImage,
            bgImage,

            onChangeTitle,
            onChangeDescription,
            onChangeMainImage,
            onChangeBgImage,
            onChangeUrlQueryParams
        } = this.props;

        const mainImgUrl = imageSearchUrl(mainImage, MAIN_IMG_W, MAIN_IMG_H),
            bgImageUrl = imageSearchUrl(bgImage, BG_IMG_W, BG_IMG_H);

        document.body.style.backgroundImage = `url(${bgImageUrl})`;

        return (
            <main role="main">
                <section>
                    <div class="container">
                        <div class="card is-wide">
                            <div class="card-content ">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-128x128">
                                            <img src={mainImgUrl} alt="Custom image" />
                                        </figure>
                                    </div>

                                    <div class="media-content">
                                        <p class="title is-4">{title}</p>
                                        <p class="subtitle is-6">{subtitle}</p>
                                    </div>
                                </div>

                                <p class="content"> {description}</p>

                                <footer class="card-footer">
                                    <p class="card-footer-item">
                                        <span>
                                            Made with <a href={REPO_URL}>Instant Website</a>
                                        </span>
                                    </p>
                                </footer>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

/**
 * Map URL query parameters to props for MainPage.
 *
 * In this case the mapping happens automatically by first decoding the URL query parameters based
 * on the urlPropsQueryConfig.
 */
export default addUrlProps({ urlPropsQueryConfig })(MainPage);
