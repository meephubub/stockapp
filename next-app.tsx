// stockapp/next-app.tsx

import { Roboto } from "next/font/google";
import { AppProps } from "next/app";
import Button from "./src/app/components/ui/button"; // Ensure this path is correct

const roboto = Roboto({
  weight: ["400", "700"], // Specify the weights you want to use
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
        <style dangerouslySetInnerHTML={{ __html: roboto.style }} />
      </head>
      <body className={roboto.className}>
        <Button>Click Me</Button> {/* Provide the children prop */}
        <Component {...pageProps} />
      </body>
    </html>
  );
}

export default MyApp;
