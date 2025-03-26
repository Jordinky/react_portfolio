import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // Change to "dark" for dark mode
    primary: {
      main: "#F4F5F6", // Customize primary color
    },
    secondary: {
      main: "#353B3C", // Customize secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;
