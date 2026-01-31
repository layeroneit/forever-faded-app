# Forever Faded App

Barbershop management app — login as **Client**, **Barber**, or **Owner** and use the demo UI.

## Run the app

1. **Install Node.js** (if needed): https://nodejs.org/ (LTS)

2. **Open a terminal** in this folder:
   ```bash
   cd C:\Users\Admin\forever-faded-app
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the dev server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**  
   Vite will show a URL like `http://localhost:5173` — open it to use the app.

## Login (demo)

- Pick **Client**, **Barber**, or **Owner**
- Enter any email and password
- Click **Sign In**

No real auth — the app uses mock data.

---

## Push to GitHub

### Option A: Create repo on GitHub, then push

1. **Create a new repo** on GitHub: https://github.com/new  
   - Name it (e.g. `forever-faded-app`)  
   - Leave it empty (no README, no .gitignore)  
   - Create the repo  

2. **Add remote and push** (replace `YOUR_USERNAME` and `REPO_NAME` with yours):
   ```bash
   cd C:\Users\Admin\forever-faded-app
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Option B: GitHub CLI (if installed)

```bash
cd C:\Users\Admin\forever-faded-app
gh repo create forever-faded-app --public --source=. --push
```

### Set your Git identity (if you haven’t)

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```
