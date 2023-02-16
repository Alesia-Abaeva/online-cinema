/** Функция для генерации элементов, необходимо ввести тип элемента и создаваемый класс */
export const createElem = (element: string, className: string): HTMLElement => {
  const createdElement: HTMLElement = document.createElement(element);
  createdElement.classList.add(className);

  return createdElement;
};

/** Вставить элемент перед дочерним элементом родительского контейнера */
export const insertBefore = ({
  node,
  siblingNumber,
  parentNode,
}: {
  node: HTMLElement;
  siblingNumber: number;
  parentNode: HTMLElement;
}) => {
  parentNode.insertBefore(node, parentNode.childNodes[siblingNumber - 1]);
};
