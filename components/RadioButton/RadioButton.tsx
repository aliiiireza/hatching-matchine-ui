import { RadioList, RadioItem } from "./RadioButton.styled";

interface RadioButtonProps {
  value: any;
  options: [{ key: string | number; label: string }];
  handleSelect: Function;
}

export default function RadioButton({
  value,
  options,
  handleSelect,
}: RadioButtonProps) {
  return (
    <RadioList>
      {options.map((option) => (
        <RadioItem
          key={option.key}
          onClick={() => handleSelect(option.key)}
          {...(value === option.key && { selected: true })}
        >
          {option.label}
        </RadioItem>
      ))}
    </RadioList>
  );
}
