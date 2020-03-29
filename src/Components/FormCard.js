import React from 'react';

import { IMAGE_SEARCH_OPTIONS } from '../constants';

/**
 * Return an array of option components.
 *
 * The key attribute is used due to warnings from React.
 */
function mkOptions(availableChoices) {
    var selectOptionComponents = availableChoices.map((choice) => (
        <option key={choice} value={choice}>
            {choice}
        </option>
    ));
    selectOptionComponents.unshift(
        <option key="(random)" value="">
            (random)
        </option>
    );

    return selectOptionComponents;
}

/**
 * Render a Bulma-styled card component.
 */
function FormCard(props) {
    const {
        title,
        subtitle,
        description,
        mainImage,
        bgImage,
        onChangeTitle,
        onChangeSubtitle,
        onChangeDescription,
        onChangeMainImage,
        onChangeBgImage
    } = props;

    const options = mkOptions(IMAGE_SEARCH_OPTIONS);

    return (
        <div className="card">
            <div className="card-content">
                <div id="controls">
                    <h3 className="subtitle is-3">Customize this page</h3>

                    <h4 className="subtitle is-4">Choose text</h4>

                    <p className="help">
                        An empty field will revert to a default value, however a single empty space is allowed to make
                        it appear empty in the display.
                    </p>
                    <br />

                    <div className="field">
                        <label className="label" for="title-input">
                            Title
                        </label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                id="title-input"
                                name="title-input"
                                placeholder="Your title"
                                size="22"
                                maxlength="22"
                                value={title}
                                onChange={(e) => onChangeTitle(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label" for="subtitle-input">
                            Subtitle
                        </label>
                        <div className="control">
                            <input
                                className="input"
                                id="subtitle-input"
                                name="subtitle-input"
                                type="text"
                                placeholder="Your subtitle"
                                size="35"
                                maxlength="35"
                                value={subtitle}
                                onChange={(e) => onChangeSubtitle(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label" for="description-input">
                            Description
                        </label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                id="description-input"
                                name="description-input"
                                placeholder="Enter your longer description"
                                rows="3"
                                cols="50"
                                value={description}
                                onChange={(e) => onChangeDescription(e.target.value)}
                            />
                        </div>
                    </div>

                    <br />

                    <h4 className="subtitle is-4">Choose images</h4>

                    <div className="field">
                        <label className="label" for="main-image-input">
                            Main image
                        </label>
                        <div className="control">
                            <div className="select" id="main-image-input" name="main-image-input">
                                <select value={mainImage} onChange={(e) => onChangeMainImage(e.target.value)}>
                                    {options}
                                </select>
                            </div>
                            <p className="help">Used for the profile image.</p>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label" for="bg-image-input">
                            Background image
                        </label>
                        <div className="control">
                            <div className="select" id="bg-image-input" name="bg-image-input">
                                <select value={bgImage} onChange={(e) => onChangeBgImage(e.target.value)}>
                                    {options}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormCard;
