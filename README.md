# AI Query Automation

## Overview
AI Query Automation is a project designed to automate query processing by connecting a user-friendly front-end interface with an n8n workflow. Users can submit queries through the interface, which are then passed to the configured workflow for automated processing.

## Features
- Simple interface for submitting user queries.
- Front-end integration with an n8n workflow.
- Automated processing through workflow nodes.
- Exportable JSON workflow for reuse and maintenance.

## Technologies Used
- HTML, CSS, JavaScript (Front End)
- n8n (Workflow Automation)
- JSON (Workflow Configuration)

## Project Structure
- Front-end files – User interface and query submission.
- `My workflow (1).json` – Exported n8n workflow.

## How It Works
1. The user enters a query in the front end.
2. The query is sent to the configured n8n webhook.
3. The n8n workflow processes the query.
4. The result is handled or returned according to the workflow configuration.

## Setup
1. Download or clone this repository.
2. Import the JSON workflow into n8n.
3. Configure the required webhook and credentials.
4. Open the front-end files and configure the connection to n8n.
5. Run the front end and test the workflow.

## Security
Do not share API keys, passwords, access tokens, or private credentials in this repository.

## Author
Sanchit Mishra
