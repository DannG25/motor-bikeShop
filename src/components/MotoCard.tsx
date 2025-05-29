import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

interface MotoCardProps {
  nombre: string;
  precio: number;
  imagen: string;
  categoria: string;
}

function MotoCard({ nombre, precio, imagen, categoria }: MotoCardProps) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={imagen}
        alt={nombre}
      />
      <CardContent>
        <Typography variant="h6">{nombre}</Typography>
        <Typography variant="body2" color="text.secondary">
          Categoría: {categoria}
        </Typography>
        <Typography variant="body1">
          Precio: ${precio.toLocaleString()}
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Comprar
        </Button>
      </CardContent>
    </Card>
  );
}

export default MotoCard;