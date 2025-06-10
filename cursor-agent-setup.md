# Cursor Background Agent Setup Guide

This guide will help you set up your project for the Cursor background agent, which enhances your development experience by providing real-time code intelligence and assistance.

## Prerequisites

- Windows 10 or later
- PowerShell
- Git installed
- Cursor IDE installed
- Node.js installed (for Node.js projects)

## Setup Files Included

This package includes several important files for Cursor background agent setup:

1. **`.gitignore`** - Properly configured for Node.js projects with Cursor-specific exclusions
2. **`.vscode/settings.json`** - VSCode/Cursor settings with background agent configuration
3. **`git-setup.ps1`** - PowerShell script for Git initialization and configuration
4. **`test-agent.ps1`** - Tests if your project is properly set up for the background agent
5. **`fix-permissions.ps1`** - Fixes common Windows permission issues

## Setup Instructions

Follow these steps to set up your project for Cursor's background agent:

### 1. Initialize Git (if not already done)

Run the Git setup script in PowerShell (as Administrator):

```powershell
.\git-setup.ps1
```

This script will:

- Initialize a Git repository if not already done
- Configure Git for Windows
- Set up proper permissions
- Create an initial commit if needed

### 2. Fix Windows Permissions

Run the permissions fix script in PowerShell (as Administrator):

```powershell
.\fix-permissions.ps1
```

This script addresses common Windows permission issues that might prevent the background agent from working properly.

### 3. Test Background Agent Readiness

Verify your setup by running:

```powershell
.\test-agent.ps1
```

This will check if all requirements are met for the background agent to work properly.

### 4. Open Project in Cursor

Open your project in Cursor. The background agent should automatically start working based on the configuration in `.vscode/settings.json`.

## Troubleshooting

If you encounter issues with the background agent:

1. **Permission Issues**
   - Make sure you ran the scripts as Administrator
   - Run `.\fix-permissions.ps1` again

2. **Git Problems**
   - Verify Git is correctly initialized with `git status`
   - Check if your `.gitignore` file is properly set up

3. **Agent Not Working**
   - Restart Cursor
   - Check the Cursor logs for any errors
   - Verify the settings in `.vscode/settings.json`

4. **Windows Defender Interference**
   - Add your project directory to Windows Defender exclusions
   - Exclude Cursor from real-time scanning

## Configuration Options

You can customize your background agent by modifying the `.vscode/settings.json` file:

- `cursor.background.agents.enabled`: Enable/disable the background agent
- `cursor.background.agents.executeCodeEnabled`: Allow agent to execute code
- `cursor.background.agents.updateFrequency`: How often the agent updates
- `cursor.background.agents.logLevel`: Logging verbosity
- `cursor.background.agents.defaultModel`: AI model to use
- `cursor.background.agents.maxTokens`: Maximum tokens per request

## Additional Resources

- [Cursor Documentation](https://cursor.sh/docs)
- [Git Documentation](https://git-scm.com/doc)
- [Windows PowerShell Documentation](https://docs.microsoft.com/en-us/powershell/)

## Support

If you continue to experience issues after following this guide, please visit the [Cursor Support](https://cursor.sh/support) page for additional assistance.
