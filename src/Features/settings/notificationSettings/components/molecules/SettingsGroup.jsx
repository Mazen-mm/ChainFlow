import CheckboxWithLabel from '../atoms/CheckboxWithLabel';

export default function SettingsGroup({ title, options, onChange }) {
  return (
    <>
      <h5>{title}</h5>
      {options.map((option) => (
        <CheckboxWithLabel
          key={option.key}
          id={option.key}
          label={option.label}
          checked={option.checked}
          onChange={() => onChange(option.key)}
        />
      ))}
    </>
  );
}
