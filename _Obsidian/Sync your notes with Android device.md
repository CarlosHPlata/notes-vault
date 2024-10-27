> [!tip] [Better to check here](https://www.reddit.com/r/ObsidianMD/comments/17odzjb/obsidian_android_syncing_via_github_in_2023/)
# Step-by-step-guide:

Step 1: Have a local checkout on your Windows/Linux/Mac (e.g. ~/Notes)

If you cloned your repo via https (`git remote -v`), skip to step 3.

Step 2: If you are using ssh, either clone the repo into a different folder via git+https, or just copy your local checkout:

2.1. Copy your folder (the whole folder, not the contents), e.g. `cp ~/Notes ~/Notes-https`

2.2. Change the remote to https

```cmd
$ cd ~/Notes-https
$ git remote -v
origin  git@github.com:OWNER/REPOSITORY.git (fetch)
origin  git@github.com:OWNER/REPOSITORY.git (push)

$ git remote set-url origin https://github.com/OWNER/REPOSITORY.git

# Verify new remote URL
$ git remote -v
origin  https://github.com/OWNER/REPOSITORY.git (fetch)
origin  https://github.com/OWNER/REPOSITORY.git (push)
```


Step 3: Copy the folder to your phone

1. Connect your phone to your PC via USB cable _(alternative: see 3b below)_
    
2. Select "MTP (File Transfer)" usb mode
    
3. Copy the whole folder (not the folder contents - some OS skip `.git`, `.obsidian`, etc) to your device, or your device's microSD card
    
4. Move/rename the folder on your device to where you want it  
    (I'll assume "Internal Memory > Obsidian", which is `/storage/emulated/0/Obsidian`)
    

Step 4: [Create an access token on GitHub](https://github.com/settings/tokens?type=beta).

Your token needs access to:

- Repository: Your Notes/Obsidian repository
    
- Repository permission: Metadata: Read access
    
- Repository permission: Code and commit statuses: Read and write access
    

Step 5: Add the folder as a vault in Obsidian

1. Open Obsidian
    
2. Tap the sidebar icon in the top left corner
    
3. Click the vault name in the top left corner, click "Manage valuts..."
    
4. Click "Open folder as vault" and navigate the the folder you copied over
    
5. Obsidian Git should try to fetch  
    (or open command pallette by swiping down -> "Obsidian Git: Pull")
    
6. Enter your username & access token when Obsidian git asks for it  
    (using your GitHub password might work, but I did not try it)
    
7. Congratulations, you now have working sync!
    

Step 6: Test your sync setup

1. Change a note
    
2. Open the command palette (swipe down in a note) -> "Obsidian Git: Commit all changes"
    
3. Open the command palette (swipe down in a note) -> "Obsidian Git: Push"
    
4. Check on GitHub if the changes were pushed successfully