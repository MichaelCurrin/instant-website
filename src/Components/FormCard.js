import React from 'react';

function FormCard(props) {
    return (
        <div id="controls">
            <h3 class="subtitle">Customize this page</h3>

            <div class="field">
                <label class="label" for="title-input">
                    Title
                </label>
                <div class="control">
                    <input
                        class="input"
                        type="text"
                        id="title-input"
                        name="title-input"
                        placeholder="Your title"
                        size="22"
                        maxlength="22"
                    />
                </div>
            </div>

            <div class="field">
                <label class="label" for="subtitle-input">
                    Subtitle
                </label>
                <div class="control">
                    <input
                        class="input"
                        id="subtitle-input"
                        name="subtitle-input"
                        type="text"
                        placeholder="Your subtitle"
                        size="35"
                        maxlength="35"
                    />
                </div>
            </div>

            <div class="field">
                <label class="label" for="description-input">
                    Description
                </label>
                <div class="control">
                    <textarea
                        class="textarea"
                        id="description-input"
                        name="description-input"
                        placeholder="Enter your longer description"
                        rows="3"
                        cols="50"
                    />
                </div>
            </div>

            <div class="field">
                <label class="label" for="main-image-input">
                    Main image
                </label>
                <div class="control">
                    <div class="select" id="main-image-input" name="main-image-input">
                        <select>
                            <option value="">(none)</option>
                            <option>african</option>
                            <option>picture</option>
                            <option>software</option>
                            <option>sock</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="field">
                <label class="label" for="bg-image-input">
                    Background image
                </label>
                <div class="control">
                    <div class="select" id="bg-image-input" name="bg-image-input">
                        <select>
                            <option value="">(none)</option>
                            <option>african</option>
                            <option>picture</option>
                            <option>software</option>
                            <option>sock</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormCard;
