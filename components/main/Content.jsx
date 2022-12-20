import Cards from "../cards/Cards";

const Content = () => {
  return (
    <div className="flex flex-col flex-1 h-full overflow-y-scroll">
      <img
        src="https://as01.epimg.net/meristation/imagenes/2021/08/31/noticias/1630415976_693445_1630416052_portada_normal.jpg"
        className="w-full h-[500px] object-cover object-right md:object-top rounded-2xl"
      />
      <Cards/>
    </div>
  );
};

export default Content;
