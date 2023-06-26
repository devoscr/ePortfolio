import React from 'react'
import './Skills.scss'

const Skills = () =>    {
    return (
        <div className='container-skills' >
            <div className='skills-list-fullstack'>
                <h1>Développeur Full-Stack</h1>
                <p>
                Connaissances des différents frameworks front-end (ReactJS, Ember, Angular, Vue)<br/>
                Connaissances des différents frameworks back-end (NodeJS, Python, Ruby, PHP, C#)<br/>
                Conception, gestion et optimisation de bases de données relationnelles et non-relationnelles
                </p>
            </div>
            <div className='skills-list-fortytwo'>
                <h1>Ecole 42 Paris</h1>
                    <p>
                        En cours d'apprentissage de mes spécialités je me suis tourné vers<br/>
                        le Machine Learning et l'Algorithmie.
                    </p>
            </div>
        </div>
    )
}

export default Skills
