import { Grid, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import MotoCard from '../components/MotoCard';
import FormularioCotizacion from '../components/FormCotizacion';

const motosPromocion = [
  { id: 1, nombre: 'Yamaha MT-07', precio: 7500, imagen: '/src/assets/mt07.jpg', categoria: 'Naked' },
  { id: 2, nombre: 'Honda CBR500R', precio: 6800, imagen: '/src/assets/cbr500r.jpg', categoria: 'Deportiva' },
  { id: 3, nombre: 'Kawasaki Versys 650', precio: 8200, imagen: '/src/assets/versys650.jpg', categoria: 'Aventura' },
];

function LandingPage() {
  return (
    <div>
      <Card sx={{ mb: 4, textAlign: 'center' }}>
        <CardMedia
          component="img"
          height="400"
          image="/src/assets/gsxr1000.jpg"
          alt="Suzuki GSX-R1000"
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            ¡Descubre la Nueva Suzuki GSX-R1000!
          </Typography>
          <Typography variant="body1" gutterBottom>
            La moto más avanzada de 2025, con 200 HP y tecnología de punta.
          </Typography>
          <Button variant="contained" color="primary" href="/catalogo/Deportiva">
            Ver Detalles
          </Button>
        </CardContent>
      </Card>
      <Typography variant="h5" gutterBottom>
        Motos en Promoción
      </Typography>
      <Grid container spacing={3}>
        {motosPromocion.map((moto) => (
          <Grid item xs={12} sm={6} md={4} key={moto.id}>
            <MotoCard {...moto} />
          </Grid>
        ))}
      </Grid>
      <FormularioCotizacion />
    </div>
  );
}

export default LandingPage;