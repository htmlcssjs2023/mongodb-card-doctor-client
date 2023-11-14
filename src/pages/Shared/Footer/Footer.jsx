import logo from '../../../assets/logo.svg';
const Footer = () => {
    return (
      <div>
        <footer className="footer py-20 bg-[#151515] text-white">
          <aside>
            <img src={logo} alt="" />
            <p>
              Edwin Diaz is a software and web <br></br> technologies engineer, a life
              coach trainer who is also a serial .
            </p>
          </aside>
          <nav>
            <header className="footer-title">About</header>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Service</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">Why car doctor</a>
            <a className="link link-hover">About</a>
          </nav>
          <nav>
            <header className="footer-title">Support</header>
            <a className="link link-hover">Support Center</a>
            <a className="link link-hover">Feedback</a>
            <a className="link link-hover">Accessability</a>
          </nav>
        </footer>
      </div>
    );
};

export default Footer;