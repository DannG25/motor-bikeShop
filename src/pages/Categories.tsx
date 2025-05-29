import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";

function Categorias() {
  const categorias = ["Deportiva", "Naked", "Aventura", "Cruiser"];

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Elige tu Categoría
      </Typography>
      <Grid container spacing={3}>
        {categorias.map((categoria) => (
          <Grid item xs={12} sm={6} md={3} key={categoria}>
            <Card>
              <CardActionArea href={`/catalogo/${categoria}`}>
                <CardContent>
                  <Typography variant="h6">{categoria}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Categorias;
