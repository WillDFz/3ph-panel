import React from 'react';
import Modal from '@mui/material/Modal';
import { Close } from '@mui/icons-material';

interface BaseModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'sl' | 'ssl' | false;
}

const BaseModal: React.FC<BaseModalProps> = ({ open, onClose, title, children, maxWidth = 'md' }) => {

    const modalSize = {
        xs: 'max-w-xs',
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        xxl: 'max-w-2xl',
        sl: 'max-w-3xl',
        ssl: 'max-w-6xl',
    }


    const modalStyle = {
        maxWidth: maxWidth ? `${modalSize[maxWidth]}` : 'md',
    };

    return (
        <Modal open={open} onClose={onClose}>
            <div
                className={`bg-white rounded-lg shadow-lg p-6 mx-4 sm:mx-auto mt-10 ${modalStyle.maxWidth}`}
            >
                <div className="flex justify-between items-center border-b border-gray-300 pb-3 mb-3">
                    <h2 className="text-lg text-tertiary_brand">{title}</h2>
                    <button
                        className="text-gray-600 hover:text-gray-900"
                        onClick={onClose}
                    >
                        <Close />
                    </button>
                </div>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </Modal>
    );
};

export default BaseModal;