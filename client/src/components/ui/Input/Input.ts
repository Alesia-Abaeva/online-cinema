import { createElem } from 'src/utils/create-element';
import styles from './Input.module.scss';

export const createInputElement = (attribute: AttributeInput): HTMLInputElement => {
  const input = createElem('input', styles['input']) as HTMLInputElement;
  input.type = attribute.type;

  attribute.placeholder && input.setAttribute('placeholder', attribute.placeholder);
  attribute.name && input.setAttribute('name', attribute.name);
  attribute.id && input.setAttribute('id', attribute.id);
  attribute.spellcheck && input.setAttribute('spellcheck', attribute.spellcheck);
  attribute.disabled && input.setAttribute('disabled', attribute.disabled);
  attribute.checked && input.setAttribute('checked', attribute.checked);
  attribute.value && input.setAttribute('value', attribute.value);
  attribute.minLength && input.setAttribute('minLength', attribute.minLength.toString());

  attribute.style && input.classList.add(attribute.style);

  return input;
};
