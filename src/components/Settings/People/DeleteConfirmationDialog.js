import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  LinearProgress
} from '@material-ui/core';

const propTypes = {
  openDeleteConfirmation: PropTypes.bool,
  handleCloseDeleteDialog: PropTypes.func,
  handleDeleteConfirmed: PropTypes.func,
  isDeletingUser: PropTypes.bool,
  errorDeletingUser: PropTypes.bool
};

const defaultProps = {};

const DeleteConfirmationDialog = ({
  open,
  handleClose,
  handleDeleteConfirmed,
  isDeletingUser,
  errorDeletingUser
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Delete this account'}</DialogTitle>
      <DialogContent>
        {errorDeletingUser ? (
          <DialogContentText id="alert-dialog-description">
            An error ocurs during user deletion. please try it again.
          </DialogContentText>
        ) : (
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        )}
      </DialogContent>
      {!isDeletingUser && (
        <DialogActions>
          <Button
            variant="outlined"
            color="secondary"
            className={'delete_button'}
            onClick={handleDeleteConfirmed}
          >
            Delete account
          </Button>
          <Button variant="outlined" onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      )}
      {isDeletingUser && <LinearProgress color="secondary" />}
    </Dialog>
  );
};

DeleteConfirmationDialog.propTypes = propTypes;
DeleteConfirmationDialog.defaultProps = defaultProps;

export default DeleteConfirmationDialog;
