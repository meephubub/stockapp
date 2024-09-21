import { Inter } from 'next/font/google';
import Button from "@/components/ui/button";

function MyApp({ Component, pageProps }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
        {Inter.style({
          subsets: ['latin'],
        })}
      </head>
      <body>
        <Component {...pageProps} />
      </body>
    </html>
  );
}

export default MyApp;
