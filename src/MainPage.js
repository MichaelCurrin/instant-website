import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';

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

    static defaultProps = {
        title: 'Your title',
        description: 'Your description'
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

        return (
            <div>
                <h1 class="title">{title}</h1>
                <h2 class="subtitle">{subtitle}</h2>
                <p class="content">{description}</p>
                <p>{mainImage}</p>
                <p>{bgImage}</p>
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
