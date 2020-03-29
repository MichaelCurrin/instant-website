import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';

import BgHero from './Components/BgHero';
import DisplayCard from './Components/DisplayCard';
import FormCard from './Components/FormCard';
import Modal from './Components/Modal';

const MAIN_IMG_W = 128,
    MAIN_IMG_H = 128;
// Based on slightly larger than a Mac Pro laptop screen.
const BG_IMG_W = 1600,
    BG_IMG_H = 1000;

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

/**
 * Handle query params in the URL and inputs on the page and render the page.
 */
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

        const mainImageUrl = imageSearchUrl(mainImage, MAIN_IMG_W, MAIN_IMG_H);
        const mainImageValues = {
            width: MAIN_IMG_W,
            height: MAIN_IMG_H,
            url: mainImageUrl
        };

        const bgImageValue = bgImage ? `url(${imageSearchUrl(bgImage, BG_IMG_W, BG_IMG_H)})` : 'none';

        const displayCard = DisplayCard({
            title: title,
            subtitle: subtitle,
            description: description,
            mainImageValues: mainImageValues
        });
        const formCard = FormCard({});

        return (
            <div>
                <Modal displayCard={displayCard} formCard={formCard} />
                <BgHero image={bgImageValue} />
            </div>
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
