"use client"

import { Link } from '@inertiajs/react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextInput from '../TextInput';

function SavedSearchModal({has_search} : any) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchTitle, setSearchTitle] = useState('');

  return (
    <>
    { has_search == true &&
    <>

           <div className="mb-8 text-end">
      <a onClick={handleShow} href="#" className="btn btn-outline-extralight border btn-white text-dark" data-bs-toggle="modal" data-bs-target="#SaveThisSearch">Save This Search</a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="py-8 px-4">
            <h3 className="mb-3 text-center text-primary">Save This Search</h3>

                    <p className="text-center">You might name your search "Notifications for Puppy Availability." This label will remind you that you're seeking updates on new puppies that become available.</p>
                    <form action="">
            <div>
              <label className="form-label">
                Search Title
              </label>
                <TextInput onChange={(e: any) => setSearchTitle(e.target.value)}  placeholder="January 1, 2025 at 12:22 am" />
            </div>
          </form>
                    </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Link className="btn btn-primary" href="/saved-search" method="post" data={{
                        name: searchTitle,
                        payload: JSON.stringify(Object.fromEntries(new URLSearchParams(window.location.search)))
            }}  onClick={handleClose}>
            Save Search
          </Link>
          <a onClick={handleClose} href="#" className="btn btn-outline-extralight border btn-white text-dark" data-bs-toggle="modal" data-bs-target="#SaveThisSearch">Cancel</a>
        </Modal.Footer>
      </Modal>
      </div>
    </> }
    </>
  );
}

export default SavedSearchModal;
