import React from 'react';

/**
 * Modal component
 *
 * The formCard property is optional.
 */
function Modal(props) {
    const { displayCard, formCard } = props;

    return (
        <div class="modal is-active">
            <div class="modal-card">
                <header class="modal-card-head" />
                <section class="modal-card-body">
                    <div>{displayCard}</div>
                    <div>{formCard}</div>
                </section>
                <footer class="modal-card-foot" />
            </div>
        </div>
    );
}

export default Modal;
