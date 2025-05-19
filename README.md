# 📚 Book API – Cloud Native Web Application (SIT323/SIT737 Task 10.2HD)

A simple Node.js and MongoDB-based book catalog API, fully containerized and deployed on Google Kubernetes Engine (GKE) with integrated monitoring and logging using Google Cloud Platform (GCP) tools.

## 🚀 Features

- RESTful API for managing books (CRUD)
- Built using **Node.js**, **Express**, and **Mongoose**
- MongoDB persistence
- Containerized with Docker
- Deployed using **Kubernetes on GKE**
- Cloud Monitoring & Logging enabled

---

## 📁 Folder Structure

book-api-clean/
├── models/
│ └── Book.js
├── routes/
│ └── books.js
├── index.js
├── Dockerfile
├── .env
├── deployment.yaml
├── mongo-deployment.yaml
├── service.yaml
├── mongo-service.yaml
└── docker-compose.yml

---

## 🔧 Setup & Run (Locally)

1. **Install dependencies**:

   npm install
Start app (local):
npm start
Run MongoDB locally (optional):
docker-compose up

🐳 Docker Commands
Build Docker image:
docker build -t book-api .
Run Docker container:
docker run -p 3000:3000 -e MONGO_URI='mongodb://host.docker.internal:27017/libraryDb' book-api
☁️ GCP Deployment (Kubernetes)
Step 1: Enable Required APIs
Kubernetes Engine

Container Registry

Cloud Monitoring

Cloud Logging

Step 2: Create Cluster

gcloud container clusters create book-api-cluster \
  --zone=australia-southeast1-a \
  --num-nodes=1
  
Step 3: Authenticate kubectl
gcloud container clusters get-credentials book-api-cluster --zone=australia-southeast1-a

Step 4: Deploy App and MongoDB
kubectl apply -f mongo-deployment.yaml
kubectl apply -f mongo-service.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

🌐 Accessing the API
Once the book-api-service gets an external IP:
curl http://<EXTERNAL-IP>:80/books

To add a book:
curl -X POST http://<EXTERNAL-IP>:80/books \
  -H "Content-Type: application/json" \
  -d '{"title": "1984", "author": "George Orwell", "year": 1949, "genre": "Dystopian"}'
