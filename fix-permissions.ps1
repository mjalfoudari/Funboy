# Windows Permissions Fix Script for Cursor Background Agent
# Run this script in PowerShell as Administrator

Write-Host "Starting Windows permissions fix for Cursor background agent..." -ForegroundColor Cyan
Write-Host "=============================================================" -ForegroundColor Cyan

# Get current directory
$currentPath = Get-Location
Write-Host "Working directory: $currentPath" -ForegroundColor Yellow

# Fix NTFS permissions for the current directory and all subdirectories
Write-Host "`nFixing NTFS permissions for the project directory..." -ForegroundColor Yellow
try {
    # Grant Everyone full control to all files and subdirectories
    # Use cmd /c to escape the icacls command properly
    cmd /c "icacls `"$currentPath`" /grant Everyone:(OI)(CI)F /T"
    Write-Host "✅ Successfully granted Everyone full control to all files and subdirectories" -ForegroundColor Green
}
catch {
    Write-Host "❌ Failed to set permissions: $_" -ForegroundColor Red
    Write-Host "   Make sure you're running PowerShell as Administrator" -ForegroundColor Red
    exit 1
}

# Fix Git repository permissions
$gitExists = Test-Path -Path ".git"
if ($gitExists) {
    Write-Host "`nFixing Git repository permissions..." -ForegroundColor Yellow
    try {
        # Make sure the .git directory is writable
        # Use cmd /c to escape the icacls command properly
        cmd /c "icacls .git /grant Everyone:(OI)(CI)F /T"
        Write-Host "✅ Successfully fixed Git repository permissions" -ForegroundColor Green
    }
    catch {
        Write-Host "❌ Failed to set Git repository permissions: $_" -ForegroundColor Red
    }
}
else {
    Write-Host "`n⚠️ Git repository not found. Skipping Git permissions fix." -ForegroundColor Yellow
    Write-Host "   Run git-setup.ps1 to initialize Git repository" -ForegroundColor Yellow
}

# Fix node_modules permissions if they exist
$nodeModulesExists = Test-Path -Path "node_modules"
if ($nodeModulesExists) {
    Write-Host "`nFixing node_modules permissions..." -ForegroundColor Yellow
    try {
        # Set correct permissions for node_modules
        # Use cmd /c to escape the icacls command properly
        cmd /c "icacls node_modules /grant Everyone:(OI)(CI)F /T"
        Write-Host "✅ Successfully fixed node_modules permissions" -ForegroundColor Green
    }
    catch {
        Write-Host "❌ Failed to set node_modules permissions: $_" -ForegroundColor Red
    }
}
else {
    Write-Host "`n⚠️ node_modules directory not found. Skipping node_modules permissions fix." -ForegroundColor Yellow
}

# Fixing common Windows-specific issues
Write-Host "`nChecking for common Windows-specific issues..." -ForegroundColor Yellow

# Check and fix maximum path length issues
git config --global core.longpaths true
Write-Host "✅ Enabled long paths in Git configuration" -ForegroundColor Green

# Configure Git line endings for Windows
git config --global core.autocrlf true
Write-Host "✅ Configured Git to handle line endings for Windows" -ForegroundColor Green

# Ensure Windows Defender isn't interfering
Write-Host "`nWindows Defender recommendations:" -ForegroundColor Yellow
Write-Host "1. Add your project directory to Windows Defender exclusions if Cursor is running slowly" -ForegroundColor Yellow
Write-Host "2. Exclude your project from real-time scanning for better performance" -ForegroundColor Yellow
Write-Host "   → Open Windows Security → Virus & threat protection → Manage settings → Add or remove exclusions" -ForegroundColor Yellow

# Test write permissions
Write-Host "`nTesting write permissions..." -ForegroundColor Yellow
try {
    $testFile = Join-Path -Path $currentPath -ChildPath "permission_test.tmp"
    "Test file - safe to delete" | Out-File -FilePath $testFile -Force
    if (Test-Path -Path $testFile) {
        Write-Host "✅ Successfully created test file" -ForegroundColor Green
        Remove-Item -Path $testFile -Force
        Write-Host "✅ Successfully deleted test file" -ForegroundColor Green
    }
    else {
        Write-Host "❌ Failed to create test file" -ForegroundColor Red
    }
}
catch {
    Write-Host "❌ Permission test failed: $_" -ForegroundColor Red
}

Write-Host "`nPermission fix completed!" -ForegroundColor Cyan
Write-Host "If you continue to have permission issues with Cursor's background agent:" -ForegroundColor Cyan
Write-Host "1. Ensure you're running Cursor as Administrator" -ForegroundColor Cyan
Write-Host "2. Try restarting Cursor and/or your computer" -ForegroundColor Cyan
Write-Host "3. Check Windows Security settings for any blocking behavior" -ForegroundColor Cyan
Write-Host "=============================================================" -ForegroundColor Cyan 