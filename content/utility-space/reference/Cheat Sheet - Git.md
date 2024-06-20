## Initialization
Clone, *create a copy*, to a local instance of a git repository URL
```sh
git clone [URL]
```
## Branch Control
Create a branch named `BRANCHNAME` 
```sh
git branch BRANCHNAME
```

Where am I
```sh
git branch # where am I
```

and switch, *checkout*, the branch.
```sh
git checkout BRANCHNAME
```

Delete a branch
```sh
git branch -d BRANCHNAME
git branch -D BRANCHNAME # delete an unmerged branch (you could lose work)
```
## Execute Modification

See what has changed
```sh
git status
```

See the differences
```sh
git diff
```

Staging - Add files to the git working instance repository, take a snapshot of additional files.
```sh
git add PATH/TO/FILE # being selective about additions
git add -u # add all modified files that are already tracked in git
git add . # add all the things!
```

Unstaging - when oups
```sh
git reset # just unlists the staged changes
```

Log working instance state, with a message
```sh
git commit -m "message description"
```
## Synchronization

getting information from 
```sh
git fetch
```

Pull to local from the remote
```sh
git pull origin BRANCHNAME
```
Push from local to the remote
```sh
git push origin BRANCHNAME
git push origin BRANCHNAME --force # nasty? overwrite whatever is on origin
```

# Workflows
## Workflow for collaboration

(assuming there's an issue in your task management system)

`main` branch remotely (in github or wherever)

Make your local `main` match remote main: `git pull origin main`

Start working on a feature:
`git branch MYBRANCH`

work work 
```
git status
git add -u
git add FILE
git add .
git commit -m "message"
git commit (should open your edit to let you write the message)
git push origin MYBRANCH
```

Go to the repo in Github and open a pull request.

Get your PR reviewed.

Merge your PR into `main`, and close it (deleting the branch can be automatic).

### Merge conflicts

> "Must reconcile the timeline before you destroy the universe" – Nick

The nuclear option when there is issues of `git pull`
```sh
git fetch origin main # updating the state of local origin main, not main main... yeah confusing
git checkout main
git reset --hard origin/main # get local main to align with origin main
```

Making my current branch pointed to current main (Iain recommends)
```sh
git checkout main
git pull
git checkout BRANCHNAME
git rebase main 
# fix conflicts
git add FIXEDFILE
git rebase --continue
```


Example conflicts
```Vim
<<<<<<< HEAD

Jordan sux

=======

<span style="color:red;">Hello Jordan!</span>

<p>Hi Nick, hi Iain! 🥳</p>

>>>>>>> 7aa73a5 (red, and more)
```