import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';

import BgHero from './Components/BgHero';
import DisplayCard from './Components/DisplayCard';
import FormCard from './Components/FormCard';
import Modal from './Components/Modal';

import { MAIN_IMG_W, MAIN_IMG_H, BG_IMG_W, BG_IMG_H } from './constants';

/**
 * Configure URL query parameter names and types.
 *
 * Note the boolean values must be passed as 1 or 0 in the URL.
 *
 * Optionally use `queryParam: 'fooInUrl'` in the value to set custom name.
 */
const urlPropsQueryConfig = {
    title: { type: UrlQueryParamTypes.string },
    subtitle: { type: UrlQueryParamTypes.string },
    description: { type: UrlQueryParamTypes.string },
    mainImage: { type: UrlQueryParamTypes.string },
    bgImage: { type: UrlQueryParamTypes.string },
    showForm: { type: UrlQueryParamTypes.boolean }
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
        showForm: PropTypes.bool,

        // Note from basic template project:
        // Change handlers are automatically generated and passed if a config is provided and
        // `addChangeHandlers` isn't false. They use `replaceIn` by default, just updating that
        // single query parameter and keeping the other existing ones.
        onChangeTitle: PropTypes.func,
        onChangeSubtitle: PropTypes.func,
        onChangeDescription: PropTypes.func,

        onChangeMainImage: PropTypes.func,
        onChangeBgImage: PropTypes.func
    };

    // Default values. These do not appear in the URL.
    static defaultProps = {
        title: 'Instant website',
        subtitle: 'Just add inspiration',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique odio, aut sed non ullam a iste quaerat doloremque adipisci nemo quod blanditiis deleniti necessitatibus unde quidem sit minus in labore?',
        mainImage: '',
        bgImage: 'nature',
        showForm: true
    };

    render() {
        const { title, subtitle, description, mainImage, bgImage, showForm } = this.props;

        const mainImageUrl = imageSearchUrl(mainImage, MAIN_IMG_W, MAIN_IMG_H);

        const displayCard = DisplayCard({
            title,
            subtitle,
            description,
            mainImageUrl
        });

        var formCard;
        if (showForm === true) {
            // Pass through props. These could be defined in `FormCard` but then it has to be
            // rewritten as a class and then used differently here.
            formCard = FormCard(this.props);
        } else {
            formCard = null;
        }

        const bgImageValue = bgImage ? `url(${imageSearchUrl(bgImage, BG_IMG_W, BG_IMG_H)})` : 'none';

        return [ <Modal displayCard={displayCard} formCard={formCard} />, <BgHero image={bgImageValue} /> ];
    }
}

/**
 * Map URL query parameters to props for MainPage.
 *
 * In this case the mapping happens automatically by first decoding the URL query parameters based
 * on the urlPropsQueryConfig.
 */
export default addUrlProps({ urlPropsQueryConfig })(MainPage);
