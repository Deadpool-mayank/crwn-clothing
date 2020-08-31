import React from 'react';
import { CollectionsOverviewContainer } from './collections-overview.styles';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCollectionForPreview} from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = ({collections}) => (
    <CollectionsOverviewContainer>
        {collections.map(({id,...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);