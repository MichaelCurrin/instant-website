import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { titleUpdated, subtitleUpdated, descriptionUpdated, mainImageKeywordsChanged, bgImageKeywordsChanged, isDataBeingEditedUpdated } from '../../app/customWebsiteDataSlice';

const Edit = props => {
  const {
    changeEditParam,
    changeTitleParam,
    changeSubtitleParam,
    changeDescriptionParam,
    changeMainImageParam,
    changeBgImageParam
  } = props;

  const title = useSelector(state => state.customWebsiteData.title)
  const subtitle = useSelector(state => state.customWebsiteData.subtitle)
  const description = useSelector(state => state.customWebsiteData.description)
  const mainImageKeywords = useSelector(state => state.customWebsiteData.mainImageKeywords)
  const bgImageKeywords = useSelector(state => state.customWebsiteData.bgImageKeywords)

  const dispatch = useDispatch()
  
  const onTitleChange = event => {
    changeTitleParam(event.target.value)
    dispatch(titleUpdated(event.target.value))
  }
  const onSubtitleChange = event => {
    changeSubtitleParam(event.target.value)
    dispatch(subtitleUpdated(event.target.value))
  }
  const onDescriptionChange = event => {
    changeDescriptionParam(event.target.value)
    dispatch(descriptionUpdated(event.target.value))
  }
  const onMainImageKeywordsChange = event => {
    changeMainImageParam(event.target.value.trim().split(','))
    dispatch(mainImageKeywordsChanged(event.target.value))
  }
  const onBgImageKeywordsChange = event => {
    changeBgImageParam(event.target.value.trim().split(','))
    dispatch(bgImageKeywordsChanged(event.target.value))
  }

  const onViewButtonClick = () => {
    changeEditParam(0)
    dispatch(isDataBeingEditedUpdated(false))
  }

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
            <label className="label" htmlFor="title-input">Title</label>
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
                onChange={onTitleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="subtitle-input">Subtitle</label>
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
                onChange={onSubtitleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="description-input">Description</label>
            <div className="control">
              <textarea
                className="textarea"
                id="description-input"
                name="description-input"
                placeholder="Enter a description"
                rows="3"
                cols="50"
                value={description}
                onChange={onDescriptionChange}
              />
            </div>
          </div>

          <br />

          <h4 className="subtitle is-4">Choose images</h4>

          <div className="field">
            <label className="label" htmlFor="main-image-input">Main image</label>
            <div className="control">
              <input
                className="input"
                id="main-image-input"
                name="main-image-input"
                type="text"
                placeholder="Search keywords"
                size="30"
                maxLength="30"
                value={mainImageKeywords}
                onChange={onMainImageKeywordsChange}
              />
            </div>
            <p className="help">Use one or more lower-case terms. Separate with commas and no spaces.</p>
          </div>

          <div className="field">
            <label className="label" htmlFor="bg-image-input">Background image</label>
            <div className="control">
              <input
                className="input"
                id="bg-image-input"
                name="bg-image-input"
                type="text"
                placeholder="Search keywords"
                size="30"
                maxLength="30"
                value={bgImageKeywords}
                onChange={onBgImageKeywordsChange}
              />
            </div>
            <p className="help">Use one or more lower-case terms. Separate with commas and no spaces.</p>
          </div>
          
        </div>
      
        <button className="button" onClick={onViewButtonClick}>Update Custom Website</button>
      </div>
    </div>
  );
};

export default Edit;