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

bash
Copy code
docker-compose up
This will start Elasticsearch on http://localhost:9200.

3. Install Dependencies
Install the necessary dependencies for the Next.js app:

bash
Copy code
npm install
4. Seed Data to Elasticsearch
To insert sample data into Elasticsearch, run the following command:

bash
Copy code
npm run seed
This will insert a few documents into the messages index in Elasticsearch.

5. Run the Next.js Application
Start the Next.js development server:

bash
Copy code
npm run dev
Your app will be available at http://localhost:3000.

6. Query Elasticsearch via API
You can search Elasticsearch via the API route provided in the Next.js app:

http
Copy code
GET http://localhost:3000/api/search?query=winter
This API will search for documents in the messages index containing the word winter.

Folder Structure
bash
Copy code
/nextjs-elasticsearch
├── docker-compose.yml         # Docker configuration for Elasticsearch
├── scripts/
│   └── seed.js               # Script to seed data into Elasticsearch
├── pages/
│   └── api/
│       └── search.js         # API route to query Elasticsearch
├── package.json              # Project dependencies and scripts
├── README.md                 # Project documentation
Scripts
npm run seed: Runs the seed script to insert data into Elasticsearch.
npm run dev: Starts the Next.js development server.
Troubleshooting
If you encounter issues with the Docker container, try running docker-compose down and then docker-compose up again.
Ensure that Elasticsearch is running properly by accessing http://localhost:9200 in your browser.
License
This project is open-source and available under the MIT License.

yaml
Copy code

---

This `README.md` provides an overview of the project, setup instructions, and usage details. Adjust the repository URL and any other specific details to match your project.


