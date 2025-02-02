# Team Member Management

A simple full-stack application built with **Django** (using **Django REST Framework** for the API) and **React** (using **React Router** for client-side routing). This application allows you to do a couple of things:

- View a list of team members (and see how many there are).
- Add new team members.
- Edit existing team members.
- Delete team members.

> **Note:** This README assumes you are running the backend on `localhost:8000` and the frontend on `localhost:3000`. Adjust as needed for your environment.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Backend Setup (Django)](#backend-setup-django)
3. [Frontend Setup (React)](#frontend-setup-react)
4. [Running the Application](#running-the-application)
5. [Usage](#usage)
6. [Additional Notes](#additional-notes)

---

## Prerequisites

- **Python 3.8+** (or higher)
- **Node.js 14+** (or higher) and **npm** for the React frontend

   If you don't have Node.js and npm installed, follow these steps:
   1. Visit [nodejs.org](https://nodejs.org/) and download the latest LTS version.
   2. Install Node.js following the provided instructions.
   3. Verify your installation by running the following commands in your terminal:
      ```bash
      node --version
      npm --version
      ```

---

## Backend Setup (Django)

1. **Navigate** to the `backend` folder:
   ```bash
   cd backend
   ```
2. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
   > This installs Django, Django REST Framework, django-cors-headers, etc.

3. **Run database migrations** to set up the SQLite database (or another DB if configured):
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```
4. (Optional) **Create a superuser** if you want to access the Django admin panel:
   ```bash
   python manage.py createsuperuser
   ```
5. **Start the Django server**:
   ```bash
   python manage.py runserver
   ```
   By default, this starts on [http://127.0.0.1:8000](http://127.0.0.1:8000).

---

## Frontend Setup (React)

1. **Open a new terminal** (so the backend can keep running) and navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```
2. **Install React dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm start
   ```
   By default, this starts on [http://127.0.0.1:3000](http://127.0.0.1:3000).

---

## Running the Application

- **Backend**: [http://127.0.0.1:8000](http://127.0.0.1:8000)  
  - The API is served at [http://127.0.0.1:8000/api/members/](http://127.0.0.1:8000/api/members/).
  - Admin panel (if superuser created) is at [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/).

- **Frontend**: [http://127.0.0.1:3000](http://127.0.0.1:3000)  
  - Home route (`/`) displays the list of team members.
  - The add route (`/add`) displays a form to create a new team member.
  - The edit route (`/edit/:id`) displays a form to edit or delete an existing team member.

---

## Usage

1. **Open** [http://127.0.0.1:3000](http://127.0.0.1:3000) in your browser.
2. **View** the list of team members (initially empty if you haven’t added any).
3. **Search** the list of team members by the name of the memeber you aim to find.
4. **Click “+ Add Member”** to create a new member:
   - Fill out first name, last name, phone number, email, and select a role (`regular` or `admin`).
   - Click “Save” to send a POST request to the API.
5. **Edit a member** by clicking on the member’s name in the list:
   - Make changes and click “Save” to update (PUT) the record.
   - Or click **Delete** to remove (DELETE) the record entirely.
6. **Check the Django admin** (optional) at [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/) to see your team members in the `members` app.

---

## Additional Notes

- **CORS Configuration**:  
  - I used [django-cors-headers](https://github.com/adamchainz/django-cors-headers) in `settings.py`. For local development, you can allow all domains:  
    ```python
    CORS_ORIGIN_ALLOW_ALL = True
    ```
  - For a stricter setup, you may want to use `CORS_ORIGIN_WHITELIST = ['http://localhost:3000']`.

- **Database**:  
  - I'm currently using `db.sqlite3` for simplicity.

---