import { IModalProps } from "typings/modal";
import { ModalContainer, ModalOverlay, ModalWrapper } from "./styles";

export default function Modal({ children, open, closeModal }: IModalProps) {
  if (!open) return null;
  return (
    <>
      <ModalOverlay onClick={closeModal} />
      <ModalWrapper>
        <ModalContainer>{children}</ModalContainer>
      </ModalWrapper>
    </>
  );
}