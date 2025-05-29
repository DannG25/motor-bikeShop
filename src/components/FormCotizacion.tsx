import { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function FormularioCotizacion() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = () => {
    alert(`Cotización solicitada por ${nombre} (${email}): ${mensaje}`);
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Solicita una Cotización
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          fullWidth
          variant="outlined"
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          variant="outlined"
        />
        <TextField
          label="Mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          fullWidth
          multiline
          rows={4}
          variant="outlined"
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Enviar Cotización
        </Button>
      </Box>
    </Box>
  );
}

export default FormularioCotizacion;