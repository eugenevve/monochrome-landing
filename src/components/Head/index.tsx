import type { FC } from "react";
import { Helmet } from "react-helmet-async";

export const Head: FC = () => {
  return (
    <Helmet>
      {/* Basic */}
      <title>eugenevve</title>
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="description" content="Developer" />
      <meta name="keywords" content="dev" />

      {/* Styles */}
      <meta name="theme-color" content="FFFFFF" />
      <meta name="msapplication-TileColor" content="FFFFFF" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover" />

      {/* Favicons */}
      <link rel="apple-touch-icon" href="/favicons/favicon-180-180.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32-32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16-16.png" />

      {/* Share */}
      <meta property="og:url" content="/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="eugenevve" />
      <meta property="og:description" content="Developer" />
      <meta property="og:image" content="/favicons/favicon-512-512.png" />
    </Helmet>
  );
};
