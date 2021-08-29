import Header from "./header/Header";
import Footer from "./Footer/Footer";
import Product from "./Product/Product";
import Services from "./Services/Services";
import ContactUs from "./ContactUs/ContactUs";
import ScrollButton from "./ScrollToTop/ScrollToTop";

const MainPage = () => {
    return (
        <div className="App">
            <Header />
            <Product />
            <Services />
            <ContactUs />
            <ScrollButton />
            <Footer />
        </div>
    );
};

export default MainPage;
