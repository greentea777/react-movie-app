import { getYear } from "../utilities/utilities";

const Footer = () => {
  return (
    <footer className="text-center bg-black text-white py-5 hidden sm:block">
      <p>&copy; {getYear()} Yang & Willy & Sally</p>
    </footer>
  );
};
export default Footer;
