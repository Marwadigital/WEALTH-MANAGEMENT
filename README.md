# Prestige Wealth — Local Preview

Open the website locally in your browser:

- File URL (Windows):

  file:///C:/Users/Al-Marwa%20Munir/Wealth%20Management/index.html

- Or run a simple HTTP server from the project folder and open `http://localhost:8000`:

```bash
cd "C:\Users\Al-Marwa Munir\Wealth Management"
python -m http.server 8000
```

Then visit:

http://localhost:8000

This site is a static front-end. The contact form only simulates a send; integrate a server or email service to accept real requests.

Automated GitHub push (no manual per-file steps):

1. Ensure you have PowerShell available (Windows includes it).
2. Run the included script which prompts for your GitHub username and PAT:

```powershell
cd "C:\c\Users\Al-Marwa Munir\Wealth Management"
.
scripts\push_github.ps1 -RepoName "WEALTH-MANAGEMENT"
```

The script will create the repository (if needed) and upload all files using the GitHub API. Provide a PAT with `repo` scope when prompted.
