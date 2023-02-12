interface AttributeInput {
  type: string;
  placeholder?: string;
  style?: string;
  id?: string;
  name?: string;
  spellcheck?: string;
}

interface InputComponent {
  attribute: AttributeInput;
  label: string;
}

interface Commons {
  [key: string]: string;
}

interface CommonsHtml {
  container: HTMLElement;
  overlay: HTMLElement;
  window: HTMLElement;
  body: HTMLElement;
}
