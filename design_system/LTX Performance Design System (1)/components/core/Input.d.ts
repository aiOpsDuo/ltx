import * as React from 'react';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /** Label rendered above the field. Use a real label — placeholders are hints only. */
  label?: string;
  /** Sub-label hint shown below in muted gray. */
  hint?: string;
  /** Validation error message. Replaces hint when present and recolors the border. */
  error?: string;
  /** Render as `<input>` (default) or `<textarea>`. */
  as?: 'input' | 'textarea';
  /** Row count when `as="textarea"`. */
  rows?: number;
}

/** LTX form field. Always labeled. md radius. Focus ring is brand accent. */
export declare function Input(props: InputProps): JSX.Element;
