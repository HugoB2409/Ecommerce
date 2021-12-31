import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 600,
      sm: 800,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
