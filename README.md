# Next.js Elasticsearch

This project demonstrates how to set up a **Next.js** application with **Elasticsearch** running in a **Docker container**. It includes a script to seed data into Elasticsearch and provides an API route to search for that data from within the Next.js app.

## Features
- **Elasticsearch Integration**: Easily connect your Next.js app with Elasticsearch for fast search capabilities.
- **Dockerized Elasticsearch**: Use Docker to run Elasticsearch as a service.
- **Data Seeding**: Use a Node.js script to insert sample data into Elasticsearch.
- **API Route**: Query Elasticsearch from within your Next.js app through an API endpoint.

## Setup Instructions

### Prerequisites
1. **Docker** - Ensure Docker is installed on your machine.
2. **Node.js** - Ensure Node.js (v14 or later) is installed.

### 1. Clone the Repository
Clone this repository to your local machine:
```bash
git clone https://github.com/yourusername/nextjs-elasticsearch.git
cd nextjs-elasticsearch
2. Start Elasticsearch with Docker
Run the following command to bring up Elasticsearch using Docker Compose:


docker-compose up 
This will start Elasticsearch on http://localhost:9200.

3. Install Dependencies
Install the necessary dependencies for the Next.js app:

npm install
4. Seed Data to Elasticsearch
To insert sample data into Elasticsearch, run the following command:

npm run seed
This will insert a few documents into the messages index in Elasticsearch.

5. Run the Next.js Application
Start the Next.js development server:


npm run dev
Your app will be available at http://localhost:3000.



This `README.md` provides an overview of the project, setup instructions, and usage details. Adjust the repository URL and any other specific details to match your project.


