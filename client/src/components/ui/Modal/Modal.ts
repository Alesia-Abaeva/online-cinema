import { toggleModal } from 'src/components/ui/Modal/ToggleModal';
import { createElem } from 'src/utils/create-element';
import styles from './Modal.module.scss';

export const renderModal = (insideModal: HTMLElement, modalClass?: string): { [key: string]: HTMLElement } => {
  const modalFragment: HTMLElement = createElem('div', 'main__modal-container');
  const modal: HTMLElement = createElem('div', styles['modal']);

  const overlay: HTMLElement = createElem('div', 'modal__overlay');
  overlay.classList.add('hidden_overlay');

  overlay.onclick = (): void => {
    toggleModal(modal, overlay);
  };

  if (modalClass) modal.classList.add(modalClass);

  const modalContenet: HTMLElement = insideModal;

  const closeModalBtn: HTMLElement = createElem('div', 'modal__close-btn');
  const closeIcon: HTMLElement = createElem('p', 'modal__close-icon');
  closeIcon.innerHTML = '╳';
  closeModalBtn.append(closeIcon);

  closeModalBtn.onclick = (): void => {
    toggleModal(modal, overlay);
  };

  modal.append(modalContenet, closeModalBtn);

  modalFragment.append(modal, overlay);
  return { modalFragment, modal, overlay };
};
