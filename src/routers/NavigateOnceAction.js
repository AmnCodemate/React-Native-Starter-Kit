// @flow

import {NavigationActions} from 'react-navigation';

const NavigateOnceAction = (getStateForAction: Function): ?Function =>
 (action: Object, state: Object): ?Object => {
   const {type, routeName} = action;
   return (
     state &&
     type === NavigationActions.NAVIGATE &&
     routeName === state.routes[state.routes.length - 1].routeName
   ) ? null : getStateForAction(action, state);
   // NOTE: change null to state if we integrate redux to react-navigation
 };

export default NavigateOnceAction;