import React from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { LoginForm } from './LoginForm';

const LoginPopup = ({ open, handleClose }) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{ position: 'absolute', right: 8, top: 8 }}
            >
                <Close />
            </IconButton>
            <DialogContent>
                <LoginForm />
            </DialogContent>
        </Dialog>
    );
};

export default LoginPopup;
