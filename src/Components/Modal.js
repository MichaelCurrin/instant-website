import React from 'react';

/**
 * Modal component
 *
 * The formCard property is optional. The divider will only be rendered if it is set.
 */
function Modal(props) {
    const { displayCard, formCard } = props;

    return (
        <div class="modal is-active">
            <div class="modal-card">
                <header class="modal-card-head" />
                <section class="modal-card-body">
                    <div>{displayCard}</div>
                    {formCard && <hr />}
                    <div>{formCard}</div>
                </section>
                <footer class="modal-card-foot" />
            </div>
        </div>
    );
}

export default Modal;
