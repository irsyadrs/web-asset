// components/tracking-components/AddItemModal.js
"use client";

import Modal from "@/components/modal";
import NewItemForm from "./NewItemForm";

export default function AddItemModal({ isOpen, onClose, onSubmit }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Tambah Item Tracking Baru">
            <NewItemForm
                onSubmitForm={onSubmit}
                onCancel={onClose}
            />
        </Modal>
    );
}