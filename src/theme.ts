import type { Theme, ThemeOptions } from '@mui/material';
import { createTheme as createMuiTheme, responsiveFontSizes } from '@mui/material/styles';

interface Neutral {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

const neutral = {
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D1D5DB',
  400: '#9CA3AF',
  500: '#6B7280',
  600: '#4B5563',
  700: '#374151',
  800: '#1F2937',
  900: '#111827'
};

declare module '@mui/material/styles' {
  interface Palette {
    neutral?: Neutral;
  }

  interface PaletteOptions {
    neutral?: Neutral;
  }
}

interface ThemeConfig {
  responsiveFontSizes?: boolean;
}

const baseThemeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920
    }
  },
  palette: {
    action: {
      active: neutral[400],
      hover: 'rgba(255, 255, 255, 0.04)',
      selected: 'rgba(255, 255, 255, 0.08)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabled: 'rgba(255, 255, 255, 0.26)'
    },
    primary: {
      main: '#272727'
    },
    background: {
      paper: '#fcfcfc',
      default: '#fcfcfc'
    }
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: 0
        }
      }
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        },
        sizeSmall: {
          padding: '6px 16px'
        },
        sizeMedium: {
          padding: '8px 20px'
        },
        sizeLarge: {
          padding: '11px 24px'
        },
        textSizeSmall: {
          padding: '7px 12px'
        },
        textSizeMedium: {
          padding: '9px 16px'
        },
        textSizeLarge: {
          padding: '12px 16px'
        },
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '16px 24px'
        },
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '32px 24px',
          '&:last-child': {
            paddingBottom: '32px'
          }
        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6'
        },
        subheaderTypographyProps: {
          variant: 'body2'
        }
      },
      styleOverrides: {
        root: {
          padding: '32px 24px'
        }
      }
    },
    MuiCheckbox: {
      defaultProps: {
        color: 'primary'
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box'
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%'
        },
        body: {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%'
        },
        'main': {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          height: '100%',
          width: '100%'
        },
        '#__next': {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          height: '100%',
          width: '100%'
        },
        '#nprogress': {
          pointerEvents: 'none'
        },
        '#nprogress .bar': {
          backgroundColor: '#5048E5',
          height: 3,
          left: 0,
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 2000
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: 8
        },
        sizeSmall: {
          padding: 4
        }
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: 'hidden'
        }
      }
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover'
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          marginRight: '16px',
          '&.MuiListItemIcon-root': {
            minWidth: 'unset'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontWeight: 500
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    },
    MuiPopover: {
      defaultProps: {
        elevation: 16
      }
    },
    MuiRadio: {
      defaultProps: {
        color: 'primary'
      }
    },
    MuiSwitch: {
      defaultProps: {
        color: 'primary'
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.71,
          minWidth: 'auto',
          paddingLeft: 0,
          paddingRight: 0,
          textTransform: 'none',
          '& + &': {
            marginLeft: 24
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '15px 16px'
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
          '& .MuiTableCell-root': {
            borderBottom: 'none',
            fontSize: '12px',
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: 'uppercase'
          },
          '& .MuiTableCell-paddingCheckbox': {
            paddingTop: 4,
            paddingBottom: 4
          }
        }
      }
    }
  },
  direction: 'ltr',
  shape: {
    borderRadius: 8
  },
  typography: {
    button: {
      fontWeight: 600
    },
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.57
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.75
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
      lineHeight: 2.5,
      textTransform: 'uppercase'
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66
    },
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.375
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.375
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.375
    },
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.375
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.375
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.375
    }
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
};

export const createTheme = (config: ThemeConfig): Theme => {
  let theme = createMuiTheme(
    baseThemeOptions
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
