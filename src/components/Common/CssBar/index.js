import React from 'react';
import { CssBarContainer, CssBarOne, CssBarTow } from './CssBar.styles';

const CssBar = ({aline}) => {
    return (
        <CssBarContainer aline={aline}>
            <CssBarOne/>
            <CssBarTow/>
        </CssBarContainer>
    );
};

export default CssBar;