interface AttributeInput {
  type: string;
  placeholder?: string;
  style?: string;
  id?: string;
  name?: string;
}

interface InputComponent {
  attribute: AttributeInput;
  label: string;
}
