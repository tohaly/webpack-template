import React from 'react';
import classNamesBind from 'classnames/bind';
import { Session, ControlPanel } from './components';
import classes from './SessionList.module.css';
import Columns from 'react-columns';
import { useSelector } from 'react-redux';
import { Loader } from 'ui-components';
import { selectCurrentViewType, selectSessionList } from 'redux-root/sessionsSlice';
import { switchViewData } from './constants';

const cx = classNamesBind.bind(classes);

export const SessionList = () => {
  const currentView = useSelector(selectCurrentViewType);
  const { list, error, pending } = useSelector(selectSessionList);
  const listViewType = switchViewData[0].value;
  const listModuleClasses = cx('list', 'listViewModule');

  if (pending) {
    return <Loader />;
  }

  if (currentView === listViewType) {
    return (
      <>
        <ControlPanel />
        <div className={classes.list}>
          {list.map(prop => (
            <Session key={prop.id} {...prop} />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <ControlPanel />
      <Columns columns={3} gap={'8px'}>
        {list.map(prop => (
          <Session key={prop.id} {...prop} isModuleView={true} />
        ))}
      </Columns>
    </>
  );
};
