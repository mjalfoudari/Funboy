# Cursor Background Agent Test Script
# Run this script to verify that your project is properly set up for Cursor's background agent

Write-Host "Starting Cursor Background Agent Readiness Test..." -ForegroundColor Cyan
Write-Host "===============================================" -ForegroundColor Cyan

# Check for .vscode settings
$vscodeDirExists = Test-Path -Path ".vscode"
$vscodeSettingsExist = Test-Path -Path ".vscode/settings.json"

if (-not $vscodeDirExists) {
    Write-Host "❌ .vscode directory not found!" -ForegroundColor Red
    New-Item -ItemType Directory -Path ".vscode" | Out-Null
    Write-Host "   → Created .vscode directory" -ForegroundColor Yellow
}
else {
    Write-Host "✅ .vscode directory exists" -ForegroundColor Green
}

if (-not $vscodeSettingsExist) {
    Write-Host "❌ .vscode/settings.json not found!" -ForegroundColor Red
    Write-Host "   → Please run the 'git-setup.ps1' script to create it" -ForegroundColor Yellow
}
else {
    $settings = Get-Content -Path ".vscode/settings.json" -Raw | ConvertFrom-Json
    
    if ($settings."cursor.background.agents.enabled" -eq $true) {
        Write-Host "✅ Cursor background agents are enabled" -ForegroundColor Green
    }
    else {
        Write-Host "❌ Cursor background agents are not enabled in settings.json" -ForegroundColor Red
        Write-Host "   → Please set 'cursor.background.agents.enabled' to true" -ForegroundColor Yellow
    }
}

# Check Git setup
$gitExists = Test-Path -Path ".git"
if (-not $gitExists) {
    Write-Host "❌ Git repository not initialized!" -ForegroundColor Red
    Write-Host "   → Please run the 'git-setup.ps1' script to initialize Git" -ForegroundColor Yellow
}
else {
    Write-Host "✅ Git repository initialized" -ForegroundColor Green
    
    # Check if there's at least one commit
    $commitExists = git rev-parse --verify HEAD 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Repository has at least one commit" -ForegroundColor Green
    }
    else {
        Write-Host "❌ Repository has no commits" -ForegroundColor Red
        Write-Host "   → Please make an initial commit" -ForegroundColor Yellow
    }
    
    # Check .gitignore
    $gitignoreExists = Test-Path -Path ".gitignore"
    if ($gitignoreExists) {
        Write-Host "✅ .gitignore file exists" -ForegroundColor Green
        
        # Check if .gitignore has cursor-specific entries
        $gitignoreContent = Get-Content -Path ".gitignore" -Raw
        if ($gitignoreContent -match "\.cursor") {
            Write-Host "✅ .gitignore includes Cursor-specific entries" -ForegroundColor Green
        }
        else {
            Write-Host "❌ .gitignore is missing Cursor-specific entries" -ForegroundColor Red
            Write-Host "   → Please add the following to .gitignore:" -ForegroundColor Yellow
            Write-Host "     .cursor" -ForegroundColor Yellow
            Write-Host "     .cursor-log" -ForegroundColor Yellow
            Write-Host "     .cursor-snapshots" -ForegroundColor Yellow
        }
    }
    else {
        Write-Host "❌ .gitignore file not found!" -ForegroundColor Red
        Write-Host "   → Please create a .gitignore file" -ForegroundColor Yellow
    }
}

# Check for node_modules
$nodeModulesExists = Test-Path -Path "node_modules"
if ($nodeModulesExists) {
    Write-Host "✅ node_modules directory exists" -ForegroundColor Green
}
else {
    Write-Host "❌ node_modules directory not found!" -ForegroundColor Red
    Write-Host "   → Run 'npm install' to install dependencies" -ForegroundColor Yellow
}

# Check permissions using cmd /c to avoid PowerShell parsing issues
try {
    $tempFile = [System.IO.Path]::GetTempFileName()
    Move-Item -Path $tempFile -Destination ".\permission_test.tmp" -Force
    "test" | Out-File -FilePath ".\permission_test.tmp" -Append
    Remove-Item -Path ".\permission_test.tmp" -Force
    Write-Host "✅ File system permissions are correctly set" -ForegroundColor Green
}
catch {
    Write-Host "❌ File system permissions issue detected!" -ForegroundColor Red
    Write-Host "   → Run the permissions fix in 'fix-permissions.ps1'" -ForegroundColor Yellow
}

Write-Host "`nSummary:" -ForegroundColor Cyan
Write-Host "For Cursor background agent to work properly, ensure:" -ForegroundColor Cyan
Write-Host "1. .vscode/settings.json has background agents enabled" -ForegroundColor Cyan
Write-Host "2. Git repository is initialized with at least one commit" -ForegroundColor Cyan
Write-Host "3. .gitignore exists with proper Cursor entries" -ForegroundColor Cyan
Write-Host "4. All dependencies are installed" -ForegroundColor Cyan
Write-Host "5. File permissions are correctly set" -ForegroundColor Cyan

Write-Host "`nIf any tests failed, please fix the issues and run this test again." -ForegroundColor Yellow
Write-Host "===============================================" -ForegroundColor Cyan 