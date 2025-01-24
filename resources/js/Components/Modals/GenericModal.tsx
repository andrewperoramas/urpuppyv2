"use client"

import { ReactNode, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { PropsWithChildren } from 'react';

function GenericModal({title, buttonTitle, children}: PropsWithChildren<{
    buttonTitle:  ReactNode,
    title?: string,
}>) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

   <div className=" text-end">
      <div onClick={handleShow} className="" data-bs-toggle="modal" data-bs-target="#SaveThisSearch">
                    {buttonTitle}
        </div>
      <Modal show={show} className="modal-lg " onHide={handleClose}>
        <Modal.Body className="py-8 px-4">
            <h3 className="mb-3 text-center text-primary">{title}</h3>
         {children}
                    </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <a onClick={handleClose} href="#" className="btn btn-outline-extralight border btn-white text-dark" data-bs-toggle="modal" data-bs-target="#SaveThisSearch">Cancel</a>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}

export default GenericModal;
