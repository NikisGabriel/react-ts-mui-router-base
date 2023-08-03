import { useState } from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { MyButton } from "../../components/MyButton";
import { MyLink } from "../../components/MyLink";
import { MyTypography } from "../../components/MyTypography";

function Home() {
  const [count, setCount] = useState(0);
  const theme = useTheme(); // Usando o provider de tema do MUI

  theme.palette;

  const handleClick = () => setCount((s) => s + 1);

  return (
    <Container sx={{ display: "block", maxWidth: theme.spacing(800) }}>
      <Typography component="h1" variant="h1" color="Highlight">
        Essa é a Home
      </Typography>
      <Typography component="h2" variant="h2">
        Valor do estado: {count}
      </Typography>
      <Container sx={{ display: "flex", gap: theme.spacing(20) }}>
        <Button
          sx={{ textTransform: "uppercase" }}
          variant="contained"
          onClick={handleClick}
        >
          Incrementar
        </Button>
        <MyButton
          sx={{ textTransform: "uppercase" }}
          aria-label="Ir para um rota invalida"
          href="/teste"
          variant="contained"
        >
          Ir para um rota invalida
        </MyButton>
        <MyLink
          textColor="primary"
          title=""
          aria-label="Ir para um rota invalida"
          href="/teste"
        >
          Ir para um rota invalida
        </MyLink>
        <MyTypography component="h2">teste</MyTypography>
      </Container>
    </Container>
  );
}

export { Home };
