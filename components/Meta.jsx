import Head from "next/head";
const Meta = ({ keywords, description, title }) => {
  return (
    <Head>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />

      <title>A C K 2 3 - {title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  keywords:
    "kućni ljubimci, hrana za pse, mačke, glodare, ribice i ptice, macke,psi,пси,мачке, рибице,птице, храна за кућне љубимце",
  description: "Sve za vašeg kućnog ljubimca",
};

export default Meta;
