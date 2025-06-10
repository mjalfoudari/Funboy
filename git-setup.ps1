# Git initialization and configuration script for Cursor background agent
# Run this script in PowerShell as Administrator

# Check if Git is installed
try {
    $gitVersion = git --version
    Write-Host "Git is installed: $gitVersion" -ForegroundColor Green
}
catch {
    Write-Host "Git is not installed. Please install Git from https://git-scm.com/download/win" -ForegroundColor Red
    exit 1
}

# Initialize Git repository if not already initialized
if (-not (Test-Path -Path ".git")) {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
    Write-Host "Git repository initialized." -ForegroundColor Green
}
else {
    Write-Host "Git repository already initialized." -ForegroundColor Green
}

# Configure Git if needed
$userEmail = git config --global user.email
$userName = git config --global user.name

if ([string]::IsNullOrEmpty($userEmail) -or [string]::IsNullOrEmpty($userName)) {
    Write-Host "Git user configuration is not set up. Please provide your details:" -ForegroundColor Yellow
    
    if ([string]::IsNullOrEmpty($userName)) {
        $inputName = Read-Host "Enter your name for Git"
        git config --global user.name "$inputName"
    }
    
    if ([string]::IsNullOrEmpty($userEmail)) {
        $inputEmail = Read-Host "Enter your email for Git"
        git config --global user.email "$inputEmail"
    }
    
    Write-Host "Git user configuration completed." -ForegroundColor Green
}
else {
    Write-Host "Git user already configured:" -ForegroundColor Green
    Write-Host "Name: $userName" -ForegroundColor Green
    Write-Host "Email: $userEmail" -ForegroundColor Green
}

# Enable long paths in Git
git config --global core.longpaths true
Write-Host "Enabled long paths in Git configuration." -ForegroundColor Green

# Configure line endings for Windows
git config --global core.autocrlf true
Write-Host "Configured Git to handle line endings for Windows." -ForegroundColor Green

# Fix permissions for Git operations
Write-Host "Fixing permissions for Git operations..." -ForegroundColor Yellow
$currentPath = Get-Location
# Use proper escaping for icacls command
cmd /c "icacls `"$currentPath`" /grant Everyone:(OI)(CI)F /T"
Write-Host "Permissions fixed." -ForegroundColor Green

# Stage .gitignore
if (Test-Path -Path ".gitignore") {
    git add .gitignore
    Write-Host "Added .gitignore to staging area." -ForegroundColor Green
}

# Initial commit if no commits exist
$commitExists = git rev-parse --verify HEAD 2>$null
if ($LASTEXITCODE -ne 0) {
    git commit -m "Initial commit with project setup"
    Write-Host "Created initial commit." -ForegroundColor Green
}

Write-Host "`nGit setup completed successfully!" -ForegroundColor Cyan
Write-Host "Your repository is ready for use with Cursor background agent." -ForegroundColor Cyan 