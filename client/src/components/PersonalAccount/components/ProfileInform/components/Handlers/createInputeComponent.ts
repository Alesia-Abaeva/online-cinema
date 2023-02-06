import { createInputElement } from 'src/components/ui/Input/Input';
import { createElem } from 'src/utils/create-element';

export const createInputComponent = (data: InputComponent) => {
  const container = createElem('div', 'profile__form-cnt');
  const label = createElem('label', 'profile__form-label');
  label.innerHTML = data.label;
  const input = createInputElement(data.attribute);

  container.append(label, input);
  return { container, input };
};
