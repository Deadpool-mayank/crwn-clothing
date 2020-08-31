import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer } from './directory.styles';

import {createStructuredSelector} from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directory.selectors';

import {connect} from 'react-redux';

const Directory = ({sections}) => (
    <DirectoryMenuContainer>
     {sections.map(({id,...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps}/>
          /* this.state.sections.map(({title,imageUrl,id,size,linkUrl}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>*/
        ))}
     </DirectoryMenuContainer>
    );

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})    

export default connect(mapStateToProps)(Directory);