import * as React from 'react';
import { Button, ButtonR } from '@eevee/react-button';
import { Dialog, DialogTrigger, DialogTitle, DialogSurface, DialogActions, DialogBody } from '@eevee/react-dialog';
import { PublishContentProps } from './types';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { tokens, breakPoints } from '@eevee/react-theme';
import { InputGroup } from '@components/input-group/index';
import { TextLink } from '@eevee/react-link';

import { checkValidity, jsGMT } from '@utilities/index';
import { setDefaultDate, setDefaultMaxDate, setDefaultMinDate } from '@feature/new-story/index';

const useStyles = makeStyles({
  root: {
    maxWidth: '70vw',

    [`@media ${breakPoints.lgAndLarger}`]: {},

    [`@media ${breakPoints.lg}`]: {},

    [`@media ${breakPoints.md}`]: {},

    [`@media ${breakPoints.sm}`]: {
      maxWidth: '90vw',
    },

    [`@media ${breakPoints.xs}`]: {
      maxWidth: '90vw',
    },
  },

  publishTo: {
    fontSize: '16px',
  },

  publishNow: {
    backgroundColor: '#1a8917',
    ...shorthands.borderColor('#1a8917'),
    color: '#fff',
    height: '37px',
    lineHeight: '37px',
    ...shorthands.padding('0', '16px'),
    ...shorthands.border('1px', 'solid', 'rgba(0,0,0,.15)'),
    ...shorthands.borderRadius('99em'),
    transitionProperty: 'background-color, border-color, color, fill',
    transitionDuration: '0.1s, 0.1s, 0.1s, 0.1s',
    transitionTimingFunction: 'ease, ease, ease, ease',
    transitionDelay: '0s, 0s, 0s, 0s',
    display: 'inline-block',
    fontSize: '14px',
    textAlign: 'center',
    textDecorationLine: 'none',
    cursor: 'pointer',
    verticalAlign: 'bottom',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    fontWeight: 400,
    fontStyle: 'normal',
    letterSpacing: 0,
    textRendering: 'optimizeLegibility',
    fontFamily: tokens.fontFamilySpicy,

    ':hover': {
      backgroundColor: '#0f730c',
      ...shorthands.borderColor('#0f730c'),
      color: ' #fff',
    },

    '& span': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

  publishDisabled: {
    backgroundColor: tokens.bgDisable, // #141414 ##f0f0f0
    ...shorthands.borderColor(tokens.bDisable), // #424242 #e0e0e0
    color: tokens.fDisable, // #5c5c5c # #bdbdbd

    cursor: 'not-allowed',

    ':hover': {
      backgroundColor: tokens.bgDisable, // #141414 ##f0f0f0
      ...shorthands.borderColor(tokens.bDisable), // #424242 #e0e0e0
      color: tokens.fDisable, // #5c5c5c # #bdbdbd

      cursor: 'not-allowed',
    },

    ':hover:active': {
      backgroundColor: tokens.bgDisable, // #141414 ##f0f0f0
      ...shorthands.borderColor(tokens.bDisable), // #424242 #e0e0e0
      color: tokens.fDisable, // #5c5c5c # #bdbdbd

      cursor: 'not-allowed',
    },
  },
});

const useDateTimeStyles = makeStyles({
  dateTime: {
    ...shorthands.border('0'),
    ...shorthands.borderBottom('1px', 'solid', tokens.f1),
    ...shorthands.borderRadius('0'),
    ...shorthands.padding('0'),
    ...shorthands.outline('0'),
    paddingBottom: '3px',
    height: 'auto',
    backgroundColor: 'transparent',
    color: tokens.f1,
    width: '100%',
  },

  datePickerErrors: {
    color: '#cc5454',
    fill: '#cc5454',
    marginTop: '4px',
  },
});

const useInputGroupStyles = makeStyles({
  tag: {
    marginTop: '8px',
    marginBottom: '16px',

    '& span': {
      fontWeight: 400,
      color: tokens.f2,
    },
  },

  input: {
    // ...shorthands.border('1px', 'solid', tokens.f10),
  },
});

export const PublishContent = ({
  tags,
  setTagChange,
  isSchedule,
  setSchedule,
  datePickerRef,
  onPublishClick,
}: PublishContentProps) => {
  const styles = useStyles();
  const dateTimeStyles = useDateTimeStyles();
  const inputGroupStyles = useInputGroupStyles();

  const [datePickErrors, setDatePickErrors] = React.useState<string | null>(null);

  const onDateTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!datePickerRef.current) {
      return;
    }

    switch (checkValidity(datePickerRef.current)) {
      case 2:
        setDatePickErrors(`You can't schedule a story in the past. We'd like to avoid those sticky time paradoxes.`);
        break;
      case 1:
        setDatePickErrors('Please specify a valid date.');
        break;
      default:
        setDatePickErrors(null);
        break;
    }
  };

  const onScheduleClick = () => {
    setSchedule(!isSchedule);
  };

  return (
    <>
      <InputGroup
        type="tag"
        defaultTags={tags}
        inputClassName={inputGroupStyles.input}
        className={inputGroupStyles.tag}
        labelChildren={
          <>
            Tags
            <span> (separate with enter)</span>
          </>
        }
        onTagChange={setTagChange}
      />
      <div style={{ display: isSchedule ? 'block' : 'none' }}>
        <label>
          Schedule a time to publish:
          <div style={{ marginTop: '4px' }}>
            <input
              type={'datetime-local'}
              ref={datePickerRef}
              className={dateTimeStyles.dateTime}
              min={setDefaultMinDate()}
              max={setDefaultMaxDate()}
              defaultValue={setDefaultDate()}
              required
              onChange={onDateTimeChange}
            />
          </div>
        </label>
        {datePickErrors && <div className={dateTimeStyles.datePickerErrors}>{datePickErrors}</div>}
        <div style={{ marginTop: '8px' }}>{jsGMT()}</div>
        <div style={{ marginTop: '20px' }}>
          This story will be published automatically within five minutes of the specified time.
        </div>
      </div>
      <div style={{ marginTop: '24px' }}>
        <TextLink href="https://help.medium.com/hc/en-us/articles/360018677974">Learn more</TextLink> about what happens
        to your post when you publish.
      </div>
      <DialogActions style={{ marginTop: '24px' }}>
        <button
          className={mergeClasses(styles.publishNow, datePickErrors !== null && isSchedule && styles.publishDisabled)}
          onClick={onPublishClick}
        >
          <span>{!isSchedule ? 'Publish now' : 'Schedule to publish'}</span>
        </button>
        <Button style={{ fontSize: '14px' }} onClick={onScheduleClick}>
          {!isSchedule ? 'Schedule for later' : 'Cancel scheduling'}
        </Button>
      </DialogActions>
    </>
  );
};
