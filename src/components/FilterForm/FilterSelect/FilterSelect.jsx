import { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowIcon } from './ArrowIcon';
import { CrossIcon } from './CrossIcon';
import { DropDown } from './DropDown';
import { Wrapper, SelectBox, IconArea } from './styles';

export function FilterSelect({
  name,
  options,
  value,
  onChange,
  placeholder = 'Select...',
  label
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef();

  const normalizedOptions = [
    { label: 'Any', value: '' },
    ...options.map((opt) => ({
      label: opt,
      value: opt.toLowerCase()
    }))
  ];

  const currentLabel = normalizedOptions.find((opt) => opt.value === value)
    ?.label;

  const displayLabel = value === '' ? label || placeholder : currentLabel;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = useCallback(function () {
    setOpen((prev) => !prev);
  }, []);

  const clearValue = (e) => {
    e.stopPropagation();
    onChange?.({ target: { name, value: '' } });
  };

  return (
    <Wrapper ref={wrapperRef}>
      <SelectBox onClick={toggleDropdown} hasValue={!!value}>
        {displayLabel}
        <IconArea onClick={value ? clearValue : undefined}>
          {value ? <CrossIcon /> : <ArrowIcon rotated={open} />}
        </IconArea>
      </SelectBox>

      {open && (
        <DropDown
          name={name}
          normalizedOptions={normalizedOptions}
          setOpen={setOpen}
          onChange={onChange}
        ></DropDown>
      )}
    </Wrapper>
  );
}
