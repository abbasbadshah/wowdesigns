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
    <div className="flex flex-col min-h-screen">
      {renderHeader()}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
