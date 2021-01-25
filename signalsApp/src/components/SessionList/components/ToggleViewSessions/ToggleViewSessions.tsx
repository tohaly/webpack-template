import React from 'react';
import { useSelector } from 'react-redux';
import { Radio } from 'ui-components';
import { useRadioSwitcher } from '../../../../utils/useRadioSwitcher';
import { CurrentViewListType, selectCurrentViewType, toggleViewType } from 'redux-root/sessionsSlice';
import { switchViewData } from '../../constants';
import classes from './ToggleViewSessions.module.css';

export const ToggleViewSessions = () => {
  const { radioHandler } = useRadioSwitcher<CurrentViewListType>(toggleViewType);
  const currentViewType = useSelector(selectCurrentViewType);

  return (
    <form className={classes.form}>
      {switchViewData.map(({ value, ActiveIcon, DisableIcon }) => {
        const isChecked = currentViewType === value;
        return (
          <Radio key={value} name={'sessionListView'} onChange={radioHandler} value={value} isChecked={isChecked}>
            {isChecked ? <ActiveIcon /> : <DisableIcon />}
          </Radio>
        );
      })}
    </form>
  );
};
