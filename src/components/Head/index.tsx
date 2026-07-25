import { ThemeKind } from "@app/theme/Theme.types";
import { useTheme } from "@app/theme/useTheme";
import type { FC } from "react";
import { Helmet } from "react-helmet-async";

export const Head: FC = () => {
  const { resolvedTheme } = useTheme();
  const color = resolvedTheme === ThemeKind.DARK ? "var(--black)" : "var(--white)";
  const icon = resolvedTheme === ThemeKind.DARK ? "/favicons/dark" : "/favicons";

  return (
    <Helmet>
      {/* Basic */}
      <title>username</title>
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="description" content="Developer" />
      <meta name="keywords" content="dev" />

      {/* Styles */}
      <meta name="theme-color" content={color} />
      <meta name="msapplication-TileColor" content={color} />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover" />

      {/* Favicons */}
      <link rel="apple-touch-icon" href="/favicons/favicon-180-180.png" />
      <link rel="icon" type="image/png" sizes="32x32" href={`${icon}/favicon-32-32.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`${icon}/favicon-16-16.png`} />

      {/* Share */}
      <meta property="og:url" content="/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="username" />
      <meta property="og:description" content="Developer" />
      <meta property="og:image" content="/favicons/favicon-512-512.png" />
    </Helmet>
  );
};
