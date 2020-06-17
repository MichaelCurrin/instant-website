import React from 'react';
import { MAIN_IMG_W, MAIN_IMG_H, REPO_URL, PROJECT_TITLE, MAIN_PAGE_DISPLAY_DEFAULTS } from '../../constants';
import { isDataBeingEditedUpdated } from '../../app/customWebsiteDataSlice';
import { useSelector, useDispatch } from 'react-redux';

const View = props => {
  
  const title = useSelector(state => state.customWebsiteData.title)
  const subtitle = useSelector(state => state.customWebsiteData.subtitle)
  const description = useSelector(state => state.customWebsiteData.description)
  const mainImageUrl = useSelector(state => state.customWebsiteData.mainImageUrl)

  // This flag can be changed later when some image URLs are deterministic.
  const randomImages = true;
  const refreshMsg = randomImages ? ' - Refresh this page to pick random images.' : '';

  const dispatch = useDispatch()

  const onEditPageButtonClick = () => {
    props.changeEditParam(1)
    dispatch(isDataBeingEditedUpdated(true))
  }

  return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className={`image is-${MAIN_IMG_W}x${MAIN_IMG_H}`}>
                <img className="is-rounded" src={mainImageUrl} alt="Small profile" />
              </figure>
            </div>

            <div className="media-content">
              <p className="title is-4">{title || MAIN_PAGE_DISPLAY_DEFAULTS.title}</p>
              <p className="subtitle is-6">{subtitle || MAIN_PAGE_DISPLAY_DEFAULTS.subtitle}</p>
            </div>
          </div>

          <p className="content">{description || MAIN_PAGE_DISPLAY_DEFAULTS.description}</p>
          <br />

          <footer className="card-footer">
            <p className="card-footer-item">
              <span>
                Made with <a href={REPO_URL}>{PROJECT_TITLE}</a>
                {refreshMsg}
                <button className='button' onClick={onEditPageButtonClick}>Edit this website</button>
              </span>
            </p>
          </footer>
        </div>
      </div>
  );
};

export default View;