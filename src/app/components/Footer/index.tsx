import Style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <p className={Style.footer__text}>
        Cinelista | 2026 - Todos os direitos reservados
      </p>
    </footer>
  );
};

export default Footer;
