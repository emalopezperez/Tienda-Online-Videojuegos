import Header from "../../components/header/Header";
import Head from "next/head";

const BasicLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tienda onlinea de video juegos</title>
        <meta property="Emanuel Lopez" content="My page title" key="Tienda Onlinea" />
      </Head>
      <Header />
      { children }
    </>
  );
};

export default BasicLayout;
