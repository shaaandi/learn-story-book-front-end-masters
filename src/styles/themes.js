import { parrotGreen, neutral } from './colors';
import { primaryFont, typescale } from './typography';

export const defaultTheme = {
    primaryColor: parrotGreen[200],
    primaryColorHover: parrotGreen[100],
    primaryColorActive: parrotGreen[200],
    primaryColorDisabled: parrotGreen[500],
    textColorOnPrimary: neutral[200],
    textColor: neutral[600],
    textColorInverted: neutral[100],
    primaryFont,
    formInputBackground: neutral[200],
    formInputTextColor: neutral[600],
    formItemTitleColor: neutral[400],
    typescale,
};

export const darkTheme = {
    primaryColor: parrotGreen[400],
    primaryColorHover: parrotGreen[400],
    primaryColorActive: parrotGreen[400],
    primaryColorDisabled: parrotGreen[500],
    textColorOnPrimary: neutral[600],
    textColor: neutral[100],
    textColorInverted: neutral[600],
    primaryFont,
    formInputBackground: neutral[500],
    formInputTextColor: neutral[100],
    formItemTitleColor: neutral[500],
    typescale,
};
