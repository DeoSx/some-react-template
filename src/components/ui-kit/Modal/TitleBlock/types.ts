export type ModalTitle = string | JSX.Element;
export type ModalSubtitle = string;

export interface ModalTitleBlockProps {
  title: ModalTitle;
  subtitle?: ModalSubtitle;
}
