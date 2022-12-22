import { Kalam, Inter } from "@next/font/google";
import type { AppProps } from "next/app";

//this works
const inter = Inter({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

//this doesnt
const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          body {
            font-family: ${kalam.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
