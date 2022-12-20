import Sidebar from "../sidebar/Sidebar";
import Content from "./Content";

const Main = () => {
  return (
    <div className="h-[90vh] flex p-8 ">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Main;
