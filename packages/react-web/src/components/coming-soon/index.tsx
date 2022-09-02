import * as React from 'react';
import { useCountDownStyles, useLogoStyles, useTextStyles } from './styles';
import { mergeClasses } from '@griffel/react';
import { ComingSoonProps, CountDownProps, TitleProps } from './type';
import moment, { duration } from 'moment';
import { useInterval } from '@hooks/index';
import { Gear } from '../icons/Gear';

const CountDown = ({ date }: CountDownProps) => {
  const [state, setState] = React.useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });
  const styles = useCountDownStyles();

  const addZeros = (value: any) => {
    value = String(value);
    while (value.length < 2) {
      value = `0${value}`;
    }
    return value;
  };

  const setCountdown = () => {
    const futureDate = moment(date);

    const today = moment();

    const clockDuration = duration(futureDate.diff(today));

    const days = Math.floor(clockDuration.asDays());
    const hours = clockDuration.hours();
    const mins = clockDuration.minutes();
    const secs = clockDuration.seconds();

    setState({
      days,
      hours,
      mins,
      secs,
    });
  };

  useInterval(() => {
    setCountdown();
  }, 1000);

  React.useEffect(() => {
    setCountdown();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.countDown}>
      {Object.keys(state).map((key, i) => (
        <div key={i} className={styles.countDownSegment}>
          <span className={styles.countDownStgmentNumber}>{addZeros(state[key as keyof typeof state])}</span>
          <span className={styles.countdownSegmentCaption}>{key.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
};

const Logo = () => {
  const styles = useLogoStyles();
  return (
    <div className={mergeClasses(styles.logoContainer, styles.slow)}>
      <Gear className={styles.logo} />
    </div>
  );
};

const Title = ({ text }: TitleProps) => {
  const styles = useTextStyles();
  return <h1 className={styles.title}>{text}</h1>;
};

export const ComingSoon = ({ date }: ComingSoonProps) => {
  return (
    <>
      <div style={{ height: '40px' }} />
      <CountDown date={date} />
      <div style={{ height: '16px' }} />
      <Logo />
      <div style={{ height: '16px' }} />
      <Title text="Coming Soon!" />
      <div style={{ height: '16px' }} />
      <p style={{ alignSelf: 'center', textAlign: 'center' }}>We're working hard on the new version of out site.</p>
      <p style={{ alignSelf: 'center', textAlign: 'center' }}>I will bring a lot of new feature. Stay tuned!</p>
    </>
  );
};
