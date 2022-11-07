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

    const generateIntern = IT => {
        return `

        <div class="info">
        <li>
        <h2>${iT.name}</h2>
        <h3>Engineer</h3>
        <p class="email">Email: <a href="${iT.email}"></a>${iT.email}</p>
        <p class="id">Id: ${iT.id}</p>
        <p class="gitHub">GitHub: ${iT.gitHub}</p>
        </li>
      </div>

        `;
    };

    // use the team array to generate pieces of html based on the employee role
}

const generateTeamPage = function (employeeCards) {
    return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="reset.css" />
    <link rel="stylesheet" href="style.css" />
    <title>My Team</title>
  </head>

  <body>

    <header>
      Team Profile
    </header>

    <main>
      <div class="container">
        <div class="info" id="cards">

          <ul>
            ${employeeCards}
          </ul>

        </div>
      </div>
    </main>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  
  </body>
  </html>
  `;
  };

module.exports = team => {
    // template literal - html body that calls the generate team function
}