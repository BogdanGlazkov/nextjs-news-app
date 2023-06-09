<h1>Search News App</h1>
<hr>
<p>You can find latest news here</p>
<h2>General Information</h2>
<hr><ul>
<li>Next.js application for displaying world's breaking news, and news by search query and by category. There're 3 pages here: Breaking News page, Search page and Category page that contains 7 categories. All news are provided by https://newsapi.org</li>
</ul><ul>
<li>You can navigate beetween pages using links on the top left corner. By clicking the news card you'll be redirected to the origin news page</li>
</ul><ul>
<li>Live page: https://nextjs-news-app-flame.vercel.app/</li></ul>
<h2>Technologies Used</h2>
<hr><ul>
<li>HTML</li>
</ul><ul>
<li>CSS</li>
</ul><ul>
<li>JavaScript</li>
</ul><ul>
</ul><ul>
<li>TypeScript</li>
</ul><ul>
<li>Next.js</li></ul>
<h2>Screenshots</h2>
<img src="./public/screenshot-app.jpg" alt="Screenshot" width="800" />
<h2>Setup</h2>
<hr><p>To set up the project you can clone it from this repo: https://github.com/BogdanGlazkov/nextjs-news-app</p><h5>Steps</h5><ul>
<li>npm i</li>
</ul><ul>
<li>npm run dev</li>
</ul>
<h5>Code Examples</h5><ul>
<li>This project uses React function components, React hooks, bootstrap library for styling, Next.js functions getStaticPaths, getStaticProps and getServerSideProps instead of backend. Here is a code example of Footer component</li>
</ul>
<p><code>import s from "../styles/App.module.css";

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

export default Footer;</code></p>

<h2>Project Status</h2>
<hr><p>Completed</p>
<h2>Features that can be added</h2>
<hr><ul>
<li>Favorite news</li>
</ul><ul>
<li>Authorization</li>
</ul>
<h2>Acknowledgement</h2>
<hr><ul>
<li>This project was based on Codinginflow Next.js tutorials</li>
</ul><h2>Contact</h2>
<hr><p><span style="margin-right: 30px;"></span><a href="https://www.linkedin.com/in/bogdan-glazkov/"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" style="width: 10%;"></a><span style="margin-right: 30px;"></span><a href="https://github.com/BogdanGlazkov"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" style="width: 10%;"></a></p>
