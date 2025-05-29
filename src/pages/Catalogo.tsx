import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import MotoCard from '../components/MotoCard';
import FormularioCotizacion from '../components/FormCotizacion';

const motos = [
  { id: 1, nombre: 'Yamaha MT-07', precio: 7500, imagen: '/src/assets/mt07.jpg', categoria: 'Naked' },
  { id: 2, nombre: 'Honda CBR500R', precio: 6800, imagen: '/src/assets/cbr500r.jpg', categoria: 'Deportiva' },
  { id: 3, nombre: 'Kawasaki Versys 650', precio: 8200, imagen: '/src/assets/versys650.jpg', categoria: 'Aventura' },
  { id: 4, nombre: 'Harley-Davidson Iron 883', precio: 10500, imagen: '/src/assets/iron883.jpg', categoria: 'Cruiser' },
  { id: 5, nombre: 'Ducati Panigale V4', precio: 23000, imagen: '/src/assets/panigalev4.jpg', categoria: 'Deportiva' },
];

function CatalogoPage() {
  const { categoria } = useParams();
  const motosFiltradas = motos.filter((moto) => moto.categoria === categoria);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Catálogo: {categoria}
      </Typography>
      <Grid container spacing={3}>
        {motosFiltradas.length > 0 ? (
          motosFiltradas.map((moto) => (
            <Grid item xs={12} sm={6} md={4} key={moto.id}>
              <MotoCard {...moto} />
            </Grid>
          ))
        ) : (
          <Typography variant="body1">No hay motos disponibles en esta categoría.</Typography>
        )}
      </Grid>
      <FormularioCotizacion />
    </div>
  );
}

export default CatalogoPage;