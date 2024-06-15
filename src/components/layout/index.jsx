import { HeaderOne } from "../common/header/header1";
import { HeaderTwo } from "../common/header/header2";
import { Footer } from "../common/footer";

export const Layout = ({ children, headerType }) => {
  const renderHeader = () => {
    switch (headerType) {
      case "header1":
        return <HeaderOne />;
      case "header2":
        return <HeaderTwo />;
      default:
        return <HeaderOne />;
    }
  };

  return (
    <div>
      {renderHeader()}
      <main>{children}</main>
      <Footer />
    </div>
  );
};
