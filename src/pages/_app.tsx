import '@/styles/globals.css';
import createEmotionCache from '@/utility/createEmotionCache';
import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
  }

  const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps, emotionCache= clientSideEmotionCache }: MyAppProps) {
    
    return (
        <CacheProvider value={emotionCache}>
        {/* <ThemeProvider theme={lightTheme}> */}
          <CssBaseline />
          <Component {...pageProps} />
        {/* </ThemeProvider> */}
      </CacheProvider>
        // <>
        // <CssBaseline />
        //     <Component {...pageProps} />
            
        // </>
    );
}
