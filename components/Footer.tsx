import s from "../styles/App.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={s.footer}>
        <p>&copy; 2023 Created by Bogdan Glazkov</p>
        <a href="mailto:bglazkov@i.ua">bglazkov@i.ua</a>
      </div>
    </footer>
  );
};

export default Footer;
