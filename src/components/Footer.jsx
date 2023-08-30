import { getYear } from "../utilities/utilities";

const Footer = () => {
  return (
    <footer>
      <p>&copy; {getYear()} Yang & Willy.</p>
    </footer>
  );
};
export default Footer;
