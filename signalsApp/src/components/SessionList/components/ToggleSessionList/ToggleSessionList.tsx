import React from 'react';
import { useSelector } from 'react-redux';
import { CurrentListType, selectCurrentList, toggleSessionList } from 'redux-root/sessionsSlice';
import { Radio } from 'ui-components';
import { switchSessionData } from '../../constants';
import classes from './ToggleSessionList.module.css';
import { useRadioSwitcher } from '../../../../utils/useRadioSwitcher';

export const ToggleSessionList = () => {
  const currentList = useSelector(selectCurrentList);
  const { radioHandler } = useRadioSwitcher<CurrentListType>(toggleSessionList);

  return (
    <form className={classes.form}>
      {switchSessionData.map(({ value, text }) => {
        const isChecked = currentList === value;

        return (
          <Radio
            key={value}
            onChange={radioHandler}
            name={'sessionListType'}
            value={value}
            isChecked={isChecked}
            activeClassName={classes.active}
            labelClassName={classes.label}
          >
            {text}
          </Radio>
        );
      })}
    </form>
  );
};
