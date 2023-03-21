import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <div className="page">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
