import ModuleIcon from 'images/controlPanel/module.svg';
import ModuleDisableIcon from 'images/controlPanel/moduleDisable.svg';
import ListIcon from 'images/controlPanel/list.svg';
import ListDisableIcon from 'images/controlPanel/listDisable.svg';

// Data for toggle buttons Future/Past sessions
export const switchSessionData = [
  { value: 'futureSessions', text: 'Future Sessions' },
  { value: 'pastSessions', text: 'Past Sessions' },
];

//Data for buttons toggle view sessions
export const switchViewData = [
  { value: 'list', ActiveIcon: ListIcon, DisableIcon: ListDisableIcon },
  { value: 'module', ActiveIcon: ModuleIcon, DisableIcon: ModuleDisableIcon },
];
