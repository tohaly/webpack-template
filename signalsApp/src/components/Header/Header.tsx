import React, { useEffect, useMemo, useRef } from 'react';
import { UserAccountInfo } from './UserAccountInfo/UserAccountInfo';
import { Navigation } from './Navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { selectHeaderState, hideHeader, showHeader } from 'redux-root/headerSlice';
import useWindowSize from 'utils/useWindowSize';
import { scrollToBottom } from 'utils/scollToBottom';
import classnames from 'classnames/bind';
import classes from './Header.module.css';

const MOBILE_WIDTH = 600;
const cx = classnames.bind(classes);

export const Header = () => {
  const dispatch = useDispatch();
  const windowSize = useWindowSize();
  const isHide = useSelector(selectHeaderState);
  const prevScrollIsBottom = useRef(false);
  const memoizeScrollToBottom = useMemo(() => scrollToBottom(), []);

  const headerClassName = cx('header', { headerHide: isHide });

  useEffect(() => {
    if (windowSize.width >= MOBILE_WIDTH) {
      dispatch(showHeader());
      prevScrollIsBottom.current = false;
    }
  }, [dispatch, windowSize.width]);

  useEffect(() => {
    const scrollHandler = () => {
      if (windowSize.width <= MOBILE_WIDTH) return;

      const isBottomScroll = memoizeScrollToBottom(document.documentElement);

      if (prevScrollIsBottom.current === isBottomScroll) return;

      if (isBottomScroll) {
        dispatch(hideHeader());
        prevScrollIsBottom.current = true;
      } else {
        dispatch(showHeader());
        prevScrollIsBottom.current = false;
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  const anyClickMobileHandler = () => {
    if (windowSize.width <= 600) {
      dispatch(hideHeader());
    }
  };

  return (
    <header className={headerClassName} onClick={anyClickMobileHandler}>
      <div className={classes.headerContainer}>
        <UserAccountInfo />
        <Navigation />
      </div>
    </header>
  );
};
