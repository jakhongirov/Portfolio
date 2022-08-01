import Header from "../header/header";
import Footer from "../footer/footer";

function Layout({ children, lang, setLang }) {
    return (
        <>
            <Header lang={lang} setLang={setLang} />
            <main className="main">{children}</main>
            <Footer lang={lang} />
        </>
    )
}

export default Layout