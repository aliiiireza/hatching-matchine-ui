import { OptionWrapper, Option } from "./TraitOptions.styled";
interface TraitOptionsProps {
  options: Array<object>;
  selected: any;
  updateSelectedTraits: Function;
}

export default function TraitOptions({
  options,
  selected,
  updateSelectedTraits,
}: TraitOptionsProps) {
  return (
    <OptionWrapper>
      {options.map((option) => (
        <Option
          key={option.id}
          onClick={() => updateSelectedTraits(option.id)}
          {...(selected === option.id && { selected: true })}
        >
          {option.name}
        </Option>
      ))}
    </OptionWrapper>
  );
}
