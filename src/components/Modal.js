import React from "react";

/**
 * Modal component
 *
 * The formCard property is optional. The divider will only be rendered if formCard is set.
 */
function Modal(props) {
  const { displayCard, formCard } = props;

  return (
    <div className="modal is-active">
      <div className="modal-card">
        <header className="modal-card-head" />

        <section className="modal-card-body">
          <div>{displayCard}</div>

          {formCard && <hr />}

          <div>{formCard}</div>
        </section>

        <footer className="modal-card-foot" />
      </div>
    </div>
  );
}

export default Modal;
