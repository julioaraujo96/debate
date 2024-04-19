'use client';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';

export default function DeleteModal() {
  const handleDelete = () => {};

  const handleClose = () => {};

  return (
    <Modal isOpen={true}>
      <ModalHeader>
        <h1>Confirm Deletion</h1>
      </ModalHeader>
      <ModalBody>
        <h3>Are you sure you want to delete this item?</h3>
      </ModalBody>
      <ModalFooter>
        <Button onClick={handleClose} color='default'>
          Cancel
        </Button>
        <Button onClick={handleDelete} color='danger'>
          Delete
        </Button>
      </ModalFooter>
    </Modal>
  );
}
