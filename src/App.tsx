import { useTheme } from "@mui/material";

import Box from "@mui/material/Box";

function App() {
  const theme = useTheme();
  return <Box sx={{ color: theme.palette.primary.main }}>Hello World!</Box>;
}

export default App;
