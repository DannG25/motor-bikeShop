import { Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Categorias from './pages/Categories';
import CatalogoPage from './pages/Catalogo';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Tienda de Motos
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Inicio
          </Button>
          <Button color="inherit" component={Link} to="/categorias">
            Categorías
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/catalogo/:categoria" element={<CatalogoPage />} />
        </Routes>
      </Container>
      <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#333', color: 'white', marginTop: '2rem' }}>
        <Typography variant="body2">
          © 2025 Tienda de Motos. Todos los derechos reservados.
        </Typography>
      </footer>
    </div>
  );
}

export default App;