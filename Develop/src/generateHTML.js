const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div class="info">
        <li>
        <h2>${manager.name}</h2>
        <h3>Manager</h3>
        <p class="email">Email: <a href="${manager.email}"></a>${manager.email}</p>
        <p class="id">Id: ${manager.id}</p>
        <p class="oNum">Office #: ${manager.id}</p>
        </li>
      </div>
        
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
        
        <div class="info">
        <li>
        <h2>${engineer.name}</h2>
        <h3>Engineer</h3>
        <p class="email">Email: <a href="${engineer.email}"></a>${engineer.email}</p>
        <p class="id">Id: ${engineer.id}</p>
        <p class="gitHub">GitHub: ${engineer.gitHub}</p>
        </li>
      </div>

        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
        <div class="info">
        <li>
        <h2>${intern.name}</h2>
        <h3>Intern</h3>
        <p class="email">Email: <a href="${intern.email}"></a>${intern.email}</p>
        <p class="id">Id: ${intern.id}</p>
        <p class="school">School: ${school.name}</p>
        </li>
      </div>

        `;
    };

    // use the team array to generate pieces of html based on the employee role
}

module.exports = team => {
    // template literal - html body that calls the generate team function
}