import GoogleFonts from "next-google-fonts";
import Head from "next/head";
import React, { Fragment } from "react";
import Header from "./Header";

type Props = {
  title?: string;
  description?: string;
  iconURL?: string;
  color?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "VimeStats | Статистика игроков VimeWorld",
  description = "Веб-приложение для отслеживания статистики игроков Minecraft проекта VimeWorld",
  color = "#bb86fc",
  iconURL,
}) => {
  return (
    <Fragment>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=VT323&display=swap" />

      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="title" content={title} />
        {description && <meta name="description" content={description} />}
        <meta name="keywords" content="VimeStats,VimeWorld" />
        <meta name="author" content="runic-tears" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content={color} />

        <meta property="og:title" content={title} />
        {description && <meta property="og:description" content={description} />}
        {iconURL && <meta property="og:image" content={iconURL} />}
      </Head>

      <Fragment>
        <Header />
        {children}
      </Fragment>
    </Fragment>
  );
};

export default Layout;
