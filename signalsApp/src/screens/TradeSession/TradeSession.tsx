import React, { useEffect } from 'react';
import { MainContent, SessionList } from 'components';
import { Title } from 'ui-components';
import { getSessionList } from 'redux-root/sessionsSlice';
import { useDispatch } from 'react-redux';

export const TradeSession = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSessionList());
  }, []);

  return (
    <MainContent>
      <Title text={'Trade Sessions'} />
      <SessionList />
    </MainContent>
  );
};
