import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [clientData, setClientData] = useState({
    nom: '',
    telephone: '',
    ville: '',
    soldefacture: '',
    soldeglobal: '',


  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClientData({ ...clientData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    fetch('http://127.0.0.1:8000/api/clients/new/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    })
      .then((response) => {
        // Traitez la réponse du serveur si nécessaire
        if (response.status === 201) {
          console.log('Client ajouté avec succès');
        } else {
          console.error('Erreur lors de l\'ajout du client');
        }
      });

    handleClose(); // Ferme la boîte de dialogue après la soumission
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Ajouter Client
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter Client</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nom"
            label="nom"
            type="text"
            fullWidth
            variant="standard"
            name="nom"
            value={clientData.nom}
            onChange={handleInputChange}
          />
           <TextField
            autoFocus
            margin="dense"
            id="telephone"
            label="telephone"
            type="number"
            fullWidth
            variant="standard"
            name="telephone"
            value={clientData.telephone}
            onChange={handleInputChange}
          />
           <TextField
            autoFocus
            margin="dense"
            id="ville"
            label="ville"
            type="text"
            fullWidth
            variant="standard"
            name="ville"
            value={clientData.ville}
            onChange={handleInputChange}
          />
           <TextField
            autoFocus
            margin="dense"
            id="soldefacture"
            label="soldefacture"
            type="number"
            fullWidth
            variant="standard"
            name="soldefacture"
            value={clientData.soldefacture}
            onChange={handleInputChange}
          />
           <TextField
            autoFocus
            margin="dense"
            id="soldeglobal"
            label="soldeglobal"
            type="number"
            fullWidth
            variant="standard"
            name="soldeglobal"
            value={clientData.soldeglobal}
            onChange={handleInputChange}
          />

          
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Ajouter</Button>
          <Button onClick={handleClose}>Annuler</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
