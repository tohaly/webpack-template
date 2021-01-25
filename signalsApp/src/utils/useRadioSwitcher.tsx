import React from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreatorWithOptionalPayload } from '@reduxjs/toolkit';

export function useRadioSwitcher<T extends string>(action: ActionCreatorWithOptionalPayload<T>) {
  const dispatch = useDispatch();

  function radioHandler({ target }: React.ChangeEvent<HTMLInputElement>) {
    dispatch(action(target.value as T));
  }

  return { radioHandler };
}
