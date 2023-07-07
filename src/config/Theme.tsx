import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config : ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const Theme = extendTheme({config});

export default Theme;