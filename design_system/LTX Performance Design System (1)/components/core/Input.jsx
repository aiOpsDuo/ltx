/**
 * Input — labeled form field, theme-aware.
 */
import React from 'react';

export function Input({
  label,
  hint,
  error,
  id,
  required,
  as = 'input',
  rows = 4,
  style,
  ...rest
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const [focus, setFocus] = React.useState(false);

  const fieldStyle = {
    width: '100%',
    fontFamily: 'var(--ltx-font-sans)',
    fontSize: 15,
    lineHeight: 1.5,
    color: 'var(--ltx-text-title)',
    background: 'var(--ltx-input-bg)',
    padding: '12px 14px',
    border: `1px solid ${error ? '#C8382F' : (focus ? 'var(--ltx-accent)' : 'var(--ltx-border)')}`,
    borderRadius: 8,
    outline: 'none',
    boxShadow: focus ? `0 0 0 3px ${error ? 'rgba(200,56,47,0.25)' : 'var(--ltx-focus-ring)'}` : 'none',
    transition: 'border-color 160ms, box-shadow 160ms',
    resize: as === 'textarea' ? 'vertical' : undefined,
    ...style,
  };

  const Field = as === 'textarea' ? 'textarea' : 'input';
  const fieldProps = as === 'textarea' ? { rows } : {};

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {label ? (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: 'var(--ltx-font-sans)',
            fontSize: 13,
            fontWeight: 500,
            color: 'var(--ltx-text-title)',
          }}
        >
          {label}
          {required ? <span aria-hidden style={{ color: '#C8382F', marginLeft: 4 }}>*</span> : null}
        </label>
      ) : null}
      <Field
        id={inputId}
        required={required}
        aria-invalid={!!error || undefined}
        aria-describedby={[hintId, errorId].filter(Boolean).join(' ') || undefined}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={fieldStyle}
        {...fieldProps}
        {...rest}
      />
      {hint && !error ? (
        <p id={hintId} style={{ fontFamily: 'var(--ltx-font-sans)', fontSize: 12, color: 'var(--ltx-text-muted)', margin: 0 }}>{hint}</p>
      ) : null}
      {error ? (
        <p id={errorId} style={{ fontFamily: 'var(--ltx-font-sans)', fontSize: 12, color: '#C8382F', margin: 0 }}>{error}</p>
      ) : null}
    </div>
  );
}
