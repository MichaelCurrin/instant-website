import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import { addUrlProps, UrlQueryParamTypes } from "react-url-query";
import BgHero from "./components/BgHero";
import DisplayCard from "./components/DisplayCard";
import FormCard from "./components/FormCard";
import Modal from "./components/Modal";
import {
  BG_IMG_H,
  BG_IMG_W,
  MAIN_IMG_H,
  MAIN_IMG_W,
  MAIN_PAGE_DEFAULT_PROPS,
} from "./constants";

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
  showForm: { type: UrlQueryParamTypes.boolean },
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
    onChangeBgImage: PropTypes.func,
  };

  // Default values. These do not appear in the URL.
  static defaultProps = MAIN_PAGE_DEFAULT_PROPS;

  render() {
    const { title, subtitle, description, mainImage, bgImage, showForm } =
      this.props;

    // Double the resolution of the container, to prevent blurry images.
    const mainImageUrl = imageSearchUrl(
      mainImage,
      MAIN_IMG_W * 2,
      MAIN_IMG_H * 2
    );
    const bgImageUrl = imageSearchUrl(bgImage, BG_IMG_W, BG_IMG_H);

    const displayCard = DisplayCard({
      title,
      subtitle,
      description,
      mainImageUrl,
    });

    var formCard;
    if (showForm === true) {
      // Pass through props. These could be defined in `FormCard` but then it has to be
      // rewritten as a class and then called differently here.
      formCard = FormCard(this.props);
    } else {
      formCard = null;
    }

    return [
      <Modal key="modal" displayCard={displayCard} formCard={formCard} />,
      <BgHero key="bg-hero" image={`url(${bgImageUrl})`} />,
    ];
  }
}

/**
 * Map URL query parameters to props for MainPage.
 *
 * In this case the mapping happens automatically by first decoding the URL query parameters based
 * on the urlPropsQueryConfig.
 */
export default addUrlProps({ urlPropsQueryConfig })(MainPage);
