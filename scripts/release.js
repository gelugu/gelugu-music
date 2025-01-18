const fs = require('fs');
const { execSync } = require('child_process');

const packageData = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const repositoryName = 'gelugu'
const imageName = `${repositoryName}/${packageData.name}:${packageData.version}`;
const dockerToken = process.env.DOCKER_HUB_TOKEN

const dockerLogin = () => {
    executeCommand(
        `docker login -u ${repositoryName} -p ${dockerToken}`,
        "Login to Docker Hub",
        "Docker Hub login successful"
    );
}

const checkDockerImageExists = () => {
    const status = executeCommand(
        `docker manifest inspect ${imageName}`,
        `Checking if Docker image exists: ${imageName}`,
        "Docker image already exists",
        true,
    )

    if (status) {
        console.log(`Docker image ${imageName} already exists. Aborting release.`);
        process.exit(1);
    }
}

const dockerBuild = () => {
    executeCommand(
        `docker build -t ${imageName} .`,
        `Building Docker image: ${imageName}`,
        "Docker image built successfully"
    );
}

const dockerPush = () => {
    executeCommand(
        `docker push ${imageName}`,
        `Pushing Docker image: ${imageName}`,
        "Docker image pushed successfully"
    );
}

const executeCommand = (command, startMessage, successMessage, allowFail = false) => {
    try {
        console.log(startMessage);
        execSync(command, { stdio: 'inherit' });
        console.log(successMessage);
        return true;
    } catch (error) {
        console.error('Failed to execute command:', error.message);
        if (!allowFail) process.exit(1);
        return false;
    }
}

const main = () => {
    console.log(`Releasing version ${packageData.version} of ${packageData.name}`);
    dockerLogin();
    checkDockerImageExists();
    dockerBuild();
    dockerPush();
}

main();
