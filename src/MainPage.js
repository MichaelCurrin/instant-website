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
    description: { type: UrlQueryParamTypes.string }
};

class MainPage extends PureComponent {
    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        // Change handlers are automatically generated and passed if a config is provided and
        // `addChangeHandlers` isn't false. They use `replaceIn` by default, just updating that
        // single query parameter and keeping the other existing ones.
        onChangeTitle: PropTypes.func,
        onChangeDescription: PropTypes.func,
        onChangeUrlQueryParams: PropTypes.func
    };

    static defaultProps = {
        title: 'Your title',
        description: 'Your description'
    };

    render() {
        const { title, description, onChangeTitle, onChangeDescription, onChangeUrlQueryParams } = this.props;

        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>{title}</td>
                            <td>
                                <button onClick={() => onChangeTitle(Math.random().toString(32).substring(8))}>
                                    Change title
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>{description}</td>
                            <td>
                                <button onClick={() => onChangeDescription(Math.random().toString(32).substring(8))}>
                                    Change description
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <button
                                    onClick={() =>
                                        onChangeUrlQueryParams({
                                            title: Math.random().toString(32).substring(8),
                                            description: Math.random().toString(32).substring(8)
                                        })}
                                >
                                    Change both with one URL update
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
