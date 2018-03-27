// @flow

import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import svgs from '../../assets/svgs';
import { colors } from '../../assets/colors'

type PropsType = {
 name: string,
 fill?: string,
 stroke?: string,
 width?: number,
 height?: number,
 strokeWidth?: number
};

const Icon = (props: PropsType): SvgIcon => <SvgIcon {...props} svgs={svgs} />;

Icon.defaultProps = {
 fill: undefined,
 stroke: undefined,
 width: undefined,
 height: undefined,
 strokeWidth: undefined
};

export default Icon;

export const renderHomeIcon = ({focused, tintColor}: Object): Icon => {
// Focused means the item is active. 
 const options = focused ?
   { fill: tintColor , stroke: tintColor } :
   { fill: colors.tabIconInActive , stroke: colors.tabIconInActive };

 return (<Icon name="HomeIcon" {...options} height={24} />);
};

export const renderExploreIcon = ({focused, tintColor}: Object): Icon => {
 // Focused means the item is active. 
 const options = focused ?
   { fill: tintColor, stroke: tintColor } :
   { fill: colors.tabIconInActive, stroke: colors.tabIconInActive };

 return (<Icon name="ExploreIcon" {...options} height={24} />);
};
