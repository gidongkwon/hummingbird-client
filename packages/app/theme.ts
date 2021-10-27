// https://www.dripsy.xyz/usage/theming/create
import { makeTheme } from 'dripsy';
import {
  slate
} from '@radix-ui/colors'

function convertRadixColor(color: string) {
  // radix colors are written in 'hsla(n n n)' format, divided by spaces, which is not supported in react-native
  // so converting spaces to commas in naive way
  return color.split(' ').join(',');
}

function convertRadixColors<T extends Record<string, string>>(colors: T): Record<keyof T, string> {
  return Object.fromEntries(Object.entries(colors).map(([key, color]) => [key, convertRadixColor(color)])) as Record<keyof T, string>;
}

const theme = makeTheme({
  colors: {
    ...convertRadixColors(slate),
  },
  types: {
    reactNativeTypesOnly: true,
  },
});

type Theme = typeof theme;

declare module 'dripsy' {
  interface DripsyCustomTheme extends Theme {}
}

export { theme };
