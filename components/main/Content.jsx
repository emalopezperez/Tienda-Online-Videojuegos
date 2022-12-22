import Cards from "../cards/Cards";

const Content = () => {
  return (
    <div className="flex flex-col  flex-1 h-full overflow-y-scroll">
      <img src="https://as01.epimg.net/meristation/imagenes/2021/08/31/noticias/1630415976_693445_1630416052_portada_normal.jpg" />
      <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-8">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Content;
