import styles from './Input.module.scss';
import { createElem } from '../../../utils/create-element';

export const createInputElement = (attribute: AttributeInput): HTMLInputElement => {
  const input = createElem('input', styles['input']) as HTMLInputElement;
  input.type = attribute.type;

  attribute.placeholder && input.setAttribute('placeholder', attribute.placeholder);
  attribute.name && input.setAttribute('name', attribute.name);
  attribute.id && input.setAttribute('id', attribute.id);

  attribute.style && input.classList.add(attribute.style);

  return input;
};
