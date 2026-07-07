"# node-inventory-api" 
# Node.js Express Starter Project

A simple Node.js application built using Express.js. This project demonstrates the basic structure of an Express application and can be used as a starting point for building REST APIs, web applications, and CI/CD pipeline demonstrations.

## Objective

- Build an automated CI/CD pipeline to containerize and deploy a NodeJS Inventory REST API.

## Prerequisites

Before running this project, ensure that the following software is installed:

- Node.js (v18 or later recommended)
- npm (comes with Node.js)

Verify installation:

```bash
node -v
npm -v
```

## Project Structure

```text
node-inventory-api/
│
├── node_modules/
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd node-inventory-api
```

Install dependencies:

```bash
npm install
```

## Running the Application

Start the application:

```bash
npm start
```

Or directly run:

```bash
node server.js
```

The application will start on:

```text
http://localhost:3000
```

## Verify API Endpoints
- GET /health
- GET /products


## Available Scripts

| Command | Description |
|----------|-------------|
| npm start | Starts the application |
| npm install | Installs project dependencies |

## Future Enhancements

- REST API development
- MongoDB/MySQL integration
- Authentication and Authorization
- Docker containerization
- Jenkins CI/CD pipeline integration
- Kubernetes deployment
- AWS cloud deployment

## Technologies Used

- Node.js
- Express.js
- npm

## Module 2 - Dockerize the Application

Create a "Dockerfile".

Verify:

- Docker image builds successfully.
- Container starts successfully.
- Health endpoint is accessible.

---

## Module 3 - Jenkins Pipeline

Create a Declarative "Jenkinsfile".

Pipeline stages:

1. Checkout
2. Install Dependencies
3. Docker Build
4. Docker Push

## Docker image naming:

<dockerhub-username>/node-inventory-api:${BUILD_NUMBER}

---

## Module 4 - Kubernetes Deployment

Create:

- "deployment.yaml"
- "service.yaml"

Requirements:

- Replicas = 2
- Service Type = NodePort

## Deploy

kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

##Verify

kubectl get pods
kubectl get svc

---

## Deliverables

- NodeJS Source Code
- Dockerfile
- Jenkinsfile
- deployment.yaml
- service.yaml
- Jenkins Success Screenshot
- Docker Hub Screenshot
- Kubernetes Pods Screenshot
- Browser/Postman Output Screenshot 

## Author

Ravi Kumar K

## License

This project is provided for learning, training, and demonstration purposes.