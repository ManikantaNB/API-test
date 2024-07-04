# API TESTING (project name)

## Local Setup

1. **Node.js Installation:**
   - Install Node.js by running:  npm install node
     
2. **Creating a New Project:**
   - Create a new folder in VS Code.
   - Inside the root folder, create `index.ts` for your main TypeScript file.
   - Create a `test` folder with `index.test.ts` for tests.

3. **Package Setup:**
   - Initialize npm:   npm init -y
   
   - Install required packages:   npm install supertest jest ts-jest
   
   - Install TypeScript typings for Jest and Supertest:  npm install --save-dev @types/jest @types/supertest
     
   - Initialize ts-jest:     npx ts-jest config:init

     
## GitHub Setup 

## GitHub Integration

1. **Setting Up GitHub:**
   - Create a new repository on GitHub.

2. **Pushing to GitHub:**
   - Initialize Git in your project:  git init
     
   - Add the GitHub repository as the remote origin:   git remote add origin <repository_url>

   - Stage and commit your changes:  - git add .
                                     - git commit -m "Initial commit"
   
   - Push your changes to GitHub:   git push -u origin main

3. **GitHub Actions:**
    Interacting with GitHub Actions:

1. **Navigate to GitHub Actions**:
   - Click on the "Actions" tab at the top of this repository.

2. **Search for Node.js Workflow**:
   - Use the search bar to find workflows related to Node.js, typically defined in `.github/workflows/`.

3. **View Workflow Configuration**:
   - Click on the workflow name to view its YAML configuration file. This file outlines the steps and actions executed by GitHub Actions when triggered.

4. **Understanding Workflow Runs**:
   - Explore the Actions tab to view recent workflow runs. Click on a specific run to inspect detailed logs, job statuses, and any reported issues.


  ## jenkins Setup.

  **Jenkins Integration**

1. **Install Jenkins**
   - Install jenkins from browser.
     
2. **Create a New Jenkins Job**:
   - Freestyle Project : Create a new freestyle project with any desired name.

3. ## Manage Jenkins

  ### Plugins Management
  
  1. **Install Node.js Plugin**
     - Navigate to `Manage Jenkins` → `Manage Plugins`.
     - Go to the `Available` tab and search for `NodeJS Plugin`.
     - Install the plugin to enable Node.js support in Jenkins.
  
  ### Tools Configuration
  
  1. **Configure Node.js**
     - Navigate to `Manage Jenkins` → `Global Tool Configuration`.
     - Scroll down to find the `NodeJS` section.
     - Click on `Add NodeJS` to configure Node.js installations.
     - Specify the Node.js version and installation directory.
     - Click `Save` to apply the configuration.

4. **Configure**
   - General:
           - Description : "Enter a description for your project".
           - Source Code Management: - Select Git Repositories
                                     - Repository URL : "past your git repository URl"
                                     - Branches to build: Specify the branch to build ("*/main")
           - Build Steps :  Execute Windows batch command
                           - commands: - cmd.exe
                                       - npm install
                                       - npx jest
     
5. **Post-build Actions**
   ## Publish HTML reports
    - Reports: HTML directory to archive ("foldername/").
    - Index page[s]: Specify the main HTML file (e.g., filename.html).

  ## Click on Apply and then Save.
  

6. **Click on Build now**
   - Click on Build Now to start a build.
   - Monitor the build progress in the build history.
   - Click on a build to view Console Output, Changes, and Status.






