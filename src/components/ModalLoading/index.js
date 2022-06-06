import { Spinner } from "components/Spinner";
import ReactDOM from "react-dom";
import { Modal, ModalContent } from "./modalLoading.styles";


export default function ModalLoading() {
  return ReactDOM.createPortal(
      <Modal>
        <ModalContent>
          <Spinner />
        </ModalContent>
      </Modal>,
    document.getElementById("modal-loading")
  );
}
