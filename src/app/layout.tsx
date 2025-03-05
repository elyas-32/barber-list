import theme from "@/lib/theme";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
export const metadata: Metadata = {
  title: "Barber List",
  description: "created by Elyas mousavi",
};
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="_next">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <StyledEngineProvider injectFirst>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme} >
              <CssBaseline />
            </ThemeProvider>
          </AppRouterCacheProvider>
        </StyledEngineProvider>
        {children}
      </body>
    </html>
  );
}