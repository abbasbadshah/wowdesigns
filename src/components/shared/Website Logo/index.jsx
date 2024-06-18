import Logo from "../../../assets/images/Logo/logooriginal.png";

export const WebsiteLogo = ({ width = "100%", height = "100%", classes }) => {
  return <img src={Logo} className={classes} width={width} height={height} />;
};