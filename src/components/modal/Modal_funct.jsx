import "./Modal.css";
export default function ModalFunction({ children }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">{children}</div>
    </div>
  );
}
