/** Функция для генерации элементов, необходимо ввести тип элемента и создаваемый класс */
export const createElem = (element: string, className: string): HTMLElement => {
  const createdElement: HTMLElement = document.createElement(element);
  createdElement.classList.add(className);

  return createdElement;
};
