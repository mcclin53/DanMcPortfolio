import Project from '../components/project'
export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <p id='card'>I am excited to showcase the skills I have learned thus far. I have worked
                on a number of different projects and I have grown a lot in the few months
                that I have been participating in this bootcamp. My skills include HTML,
                Javascript, CSS, Web APIs, Node, Typescript, SQL, React, and others. Below
                are some of the projects I have completed so far. Please also see the contact
                section for ways to connect with me. I'd be happy to discuss the different
                ways I could be an asset to your company's growth. Thank you for your
                consideration.
            </p>
            <ul>
                <li>
                    <Project />
                </li>
            </ul>
        </div>
    );
}
