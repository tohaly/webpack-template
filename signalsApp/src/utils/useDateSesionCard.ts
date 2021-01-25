import moment from 'moment';
import { useEffect, useState } from 'react';

interface IUseDateSessionCard {
  startDate: number;
  locale?: 'en' | 'in';
}

const dayDetect = (left: number) => {
  switch (left) {
    case 0: {
      return 'Today';
    }
    case 1: {
      return 'Tom';
    }
    default: {
      return null;
    }
  }
};

export function useDateSessionCard({ startDate, locale = 'en' }: IUseDateSessionCard) {
  const date = moment(startDate);
  moment.locale(locale);

  const [minutesText, setMinutesText] = useState(date.fromNow());

  const daysLeft = date.diff(moment(), 'days');
  const month = moment.monthsShort(date.get('month'));
  const monthDay = date.date();
  const minuteLeft = date.diff(moment(), 'minutes');
  const isSessionActive = minuteLeft <= 0;
  const isVisible = minuteLeft <= 15;
  const time = date.format('h:mm A');

  const day = dayDetect(daysLeft);

  !isSessionActive &&
    useEffect(() => {
      const interval = setInterval(() => {
        setMinutesText(date.fromNow());
      }, (60 - moment().get('seconds')) * 1000);

      return () => {
        clearInterval(interval);
      };
    });

  return {
    minutesText,
    monthDay,
    month,
    time,
    isSessionActive,
    isVisible,
    day,
  };
}
