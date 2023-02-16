/** Функция для генерации элементов, необходимо ввести тип элемента и создаваемый класс */
export const createElem = (element: string, className: string): HTMLElement => {
  const createdElement: HTMLElement = document.createElement(element);
  createdElement.classList.add(className);

  return createdElement;
};

/** Вставить элемент перед дочерним элементом родительского контейнера */
export const insertBefore = ({
  nodes,
  siblingNumber,
  parentNode,
}: {
  nodes: HTMLElement[] | HTMLElement;
  siblingNumber: number;
  parentNode: HTMLElement;
}) => {
  if (Array.isArray(nodes)) {
    nodes.forEach((node) => parentNode.insertBefore(node, parentNode.childNodes[siblingNumber - 1]));

    return null;
  }

  return parentNode.insertBefore(nodes, parentNode.childNodes[siblingNumber - 1]);
};
