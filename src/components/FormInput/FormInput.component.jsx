import "./FormInput.styles.scss";
// eslint-disable-next-line react/prop-types
export function FormInput({ label, ...otherProps }) {
  return (
    <>
      <div className="group">
        <input className="form-input" {...otherProps} />
        {label && (
          <label
            className={`${
              otherProps.value.length ? "shrink" : ""
            } form-input-label`}
          >
            {label}
          </label>
        )}
      </div>
    </>
  );
}
