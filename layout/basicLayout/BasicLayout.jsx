import Header from "../../components/header/Header";

const BasicLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default BasicLayout;
