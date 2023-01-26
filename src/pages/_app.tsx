import '@/styles/globals.css';
import createEmotionCache from '@/utility/createEmotionCache';
import { EmotionCache } from '@emotion/cache';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import { lightTheme, darkTheme } from '../theme';
import Layout from '@/components/Layout/Layout';

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

export default function App({
    Component,
    pageProps,
    emotionCache = clientSideEmotionCache,
}: MyAppProps) {
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={darkTheme }>
                <Layout>
                    <CssBaseline />
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </CacheProvider>
    );
}
