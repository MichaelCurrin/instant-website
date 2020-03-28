import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';

const MAIN_IMG_W = 128,
    MAIN_IMG_H = 128,
    BG_IMG_W = 1600,
    BG_IMG_H = 900;

// Even if you fork this repo, please leave use URL as is to link back to the original rpeo.
const REPO_URL = 'https://github.com/MichaelCurrin/instant-website';
// But can be changed if you like.
const PROJECT_TITLE = 'Instant Website';

/**
 * Configure URL query parameter names and types.
 *
 * Optionally use `queryParam: 'fooInUrl'` in the value to set custom name.
 */
const urlPropsQueryConfig = {
    title: { type: UrlQueryParamTypes.string },
    subtitle: { type: UrlQueryParamTypes.string },
    description: { type: UrlQueryParamTypes.string },
    mainImage: { type: UrlQueryParamTypes.string },
    bgImage: { type: UrlQueryParamTypes.string }
};

/* URL for search using comma-separated keywords. Any random image will be returned if keywords are omitted. */
function imageSearchUrl(keywords, w, h) {
    return `https://source.unsplash.com/${w}x${h}/?${keywords}`;
}

function setBgImgUrl(url) {
    if (url) {
        var result = `url(${url})`;
    } else {
        var result = 'inherit';
    }

    document.body.style.backgroundImage = result;
}

function cardWithBackground(title, subtitle, description, mainImageValues) {
    // This flag can be changed later when some image URLs are deterministic.
    const randomImages = true;
    const refreshMsg = randomImages ? ' - Refresh this page to pick random images.' : '';

    return (
        <section>
            <div class="container">
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
            </div>
        </section>
    );
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

        // To change multiple values at once.
        onChangeUrlQueryParams: PropTypes.func
    };

    // Default values. These do not appear in the URL.
    static defaultProps = {
        title: 'Instant website',
        subtitle: 'Just add inspiration',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique odio, aut sed non ullam a iste quaerat doloremque adipisci nemo quod blanditiis deleniti necessitatibus unde quidem sit minus in labore?',
        mainImage: '',
        bgImage: ''
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

        const mainImageValues = {
                width: MAIN_IMG_W,
                height: MAIN_IMG_H,
                url: imageSearchUrl(mainImage, MAIN_IMG_W, MAIN_IMG_H)
            },
            bgImageValues = {
                width: BG_IMG_W,
                height: BG_IMG_H,
                url: imageSearchUrl(bgImage, BG_IMG_W, BG_IMG_H)
            };

        setBgImgUrl(bgImageValues.url);

        return cardWithBackground(title, subtitle, description, mainImageValues);
    }
}

/**
 * Map URL query parameters to props for MainPage.
 *
 * In this case the mapping happens automatically by first decoding the URL query parameters based
 * on the urlPropsQueryConfig.
 */
export default addUrlProps({ urlPropsQueryConfig })(MainPage);
