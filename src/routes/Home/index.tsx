import { useState } from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

function Home() {
  const [count, setCount] = useState(0);
  const theme = useTheme(); // Usando o provider de tema do MUI

  const handleClick = () => setCount((s) => s + 1);
  const handleThrowError = () => {
    throw new Error("novo erro");
  };

  return (
    <Container sx={{ display: "block", maxWidth: theme.spacing(800) }}>
      <Typography component="h1" variant="h1" color="Highlight">
        Essa é a Home
      </Typography>
      <Typography component="h2" variant="h2">
        Valor do estado: {count}
      </Typography>
      <Container sx={{ display: "flex", gap: theme.spacing(20) }}>
        <Button variant="contained" onClick={handleClick}>
          Incrementar
        </Button>
        <Button variant="contained" onClick={handleThrowError}>
          Lançar erro
        </Button>
      </Container>
    </Container>
  );
}

export { Home };
