import { FormInputLabel, Input, Group } from "./FormInput.styles.jsx";
// eslint-disable-next-line react/prop-types
export function FormInput({ label, ...otherProps }) {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
}
