export default function resume() {
    return (
        <div>
            <h2>Skills</h2>
            <p id = 'card'>• HTML • React • AI
                • Javascript • PostgreSQL • Insomnia
                • CSS • WebAPIs • Python • Typescript • NodeJS • MERN
            </p>
            <h2>Resume</h2>
            <a href={"/dans-resume.docx"} download="Dan's Resume" target="_blank" rel="noreferrer">
            <button>Download</button>
            </a>
        </div>
    );
}