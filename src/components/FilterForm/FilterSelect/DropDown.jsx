import { ScrollArea } from '../../common/ScrollComponent/';
import { Dropdown, Option } from './styles';

export function DropDown({ name, normalizedOptions, setOpen, onChange }) {
  const handleClick = (val) => () => {
    onChange?.({ target: { name, value: val } });
    setOpen(false);
  };

  return (
    <Dropdown>
      <ScrollArea maxHeight={240}>
        {normalizedOptions.map((option) => (
          <Option key={option.value} onClick={handleClick(option.value)}>
            {option.label}
          </Option>
        ))}
      </ScrollArea>
    </Dropdown>
  );
}
