import React, { useEffect, useState } from 'react';
import { useQueryParam, NumberParam, StringParam, ArrayParam, withDefault } from 'use-query-params';
import View from './View';
import Edit from './Edit';
import { useSelector, useDispatch } from 'react-redux';
import { isDataBeingEditedUpdated, titleUpdated, subtitleUpdated, descriptionUpdated, mainImageKeywordsChanged, bgImageKeywordsChanged } from '../../app/customWebsiteDataSlice';

const Custom = () => {
  const edit = useSelector(state => state.customWebsiteData.isDataBeingEdited)
  const bgImageUrl = useSelector(state => state.customWebsiteData.bgImageUrl)

  const [editParam, setEditParam] = useQueryParam('edit', NumberParam)
  const [titleParam, setTitle] = useQueryParam('title', StringParam)
  const [subtitleParam, setSubtitle] = useQueryParam('subtitle', StringParam)
  const [descriptionParam, setDescription] = useQueryParam('description', StringParam)
  const [mainImageParam, setMainImage] = useQueryParam('mainImage', withDefault(ArrayParam, []))
  const [bgImageParam, setBgImage] = useQueryParam('bgImage', withDefault(ArrayParam, []))

  const dispatch = useDispatch()

  useEffect(() => {
    if(typeof editParam === 'number') {
      if(editParam === 1) dispatch(isDataBeingEditedUpdated(true))
      else dispatch(isDataBeingEditedUpdated(false)) 
    }
    if(titleParam) dispatch(titleUpdated(titleParam))
    if(subtitleParam) dispatch(subtitleUpdated(subtitleParam))
    if(descriptionParam) dispatch(descriptionUpdated(descriptionParam))
    if(mainImageParam.length > 0) dispatch(mainImageKeywordsChanged(mainImageParam.join(',')))
    if(bgImageParam.length > 0) dispatch(bgImageKeywordsChanged(bgImageParam.join(',')))

    if(typeof editParam === 'number') console.debug('redux state updated from editParam')    
    if(titleParam) console.debug('redux state updated from titleParam')
    if(subtitleParam) console.debug('redux state updated from subtitleParam')
    if(descriptionParam) console.debug('redux state updated from descriptionParam')
    if(mainImageParam.length > 0) console.debug('redux state updated from mainImageParam')
    if(bgImageParam.length > 0) console.debug('redux state updated from bgImageParam')
  }, [])

  console.debug(bgImageUrl)
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', overflow: 'auto', backgroundImage: `url(${bgImageUrl})` }}>
      <div className='container' style={{ margin: '2rem 10rem' }} >
        {edit === false ? (
          <View changeEditParam={setEditParam} /> 
        ) : (
          <Edit 
            changeEditParam={setEditParam}
            changeTitleParam={setTitle}
            changeSubtitleParam={setSubtitle}
            changeDescriptionParam={setDescription}
            changeMainImageParam={setMainImage}
            changeBgImageParam={setBgImage} />
        )}
      </div>
    </div>
  );
};

export default Custom;