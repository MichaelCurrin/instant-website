import React from 'react';

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

    return (
        <div className="card">
            <div className="card-content">
                <div id="controls">
                    <h3 className="subtitle is-3">Customize this page</h3>

                    <h4 className="subtitle is-4">Choose text</h4>

                    <p className="help">
                        If a field is left empty, the site's default will be shown above. So to make a field display as
                        empty above, use just a single space character here.
                    </p>
                    <br />

                    <div className="field">
                        <label className="label" htmlFor="title-input">
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
                                maxLength="22"
                                value={title}
                                onChange={(e) => onChangeTitle(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label" htmlFor="subtitle-input">
                            Subtitle
                        </label>
                        <div className="control">
                            <input
                                className="input"
                                id="subtitle-input"
                                name="subtitle-input"
                                type="text"
                                placeholder="Your subtitle"
                                size="45"
                                maxLength="45"
                                value={subtitle}
                                onChange={(e) => onChangeSubtitle(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label" htmlFor="description-input">
                            Description
                        </label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                id="description-input"
                                name="description-input"
                                placeholder="Enter a description"
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
                        <label className="label" htmlFor="main-image-input">
                            Main image
                        </label>
                        <div className="control">
                            <input
                                className="input"
                                id="main-image-input"
                                name="main-image-input"
                                type="text"
                                placeholder="Search keywords"
                                size="30"
                                maxLength="30"
                                value={mainImage}
                                onChange={(e) => onChangeMainImage(e.target.value)}
                            />
                        </div>
                        <p class="help">Use one or more lower-case terms. Separate with commas and no spaces.</p>
                    </div>

                    <div className="field">
                        <label className="label" htmlFor="bg-image-input">
                            Background image
                        </label>
                        <div className="control">
                            <input
                                className="input"
                                id="bg-image-input"
                                name="bg-image-input"
                                type="text"
                                placeholder="Search keywords"
                                size="30"
                                maxLength="30"
                                value={bgImage}
                                onChange={(e) => onChangeBgImage(e.target.value)}
                            />
                        </div>
                        <p class="help">Use one or more lower-case terms. Separate with commas and no spaces.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormCard;
