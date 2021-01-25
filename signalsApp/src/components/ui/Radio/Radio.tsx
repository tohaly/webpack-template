import React from 'react';
import classNamesBind from 'classnames/bind';
import classes from './Radio.module.css';

interface IProps {
  name: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  value: string;
  isChecked: boolean;
  labelClassName?: string;
  inputClassName?: string;
  activeClassName?: string;
}

const cx = classNamesBind.bind(classes);

export const Radio = ({
  name,
  onChange,
  value,
  children,
  isChecked,
  labelClassName,
  inputClassName,
  activeClassName,
}: React.PropsWithChildren<IProps>) => {
  const labelClasses = cx('label', { [labelClassName]: labelClassName, [activeClassName]: isChecked });
  const inputClasses = cx('input', { [inputClassName]: inputClassName });

  return (
    <label className={labelClasses}>
      <input className={inputClasses} type="radio" name={name} onChange={onChange} value={value} checked={isChecked} />
      {children}
    </label>
  );
};
