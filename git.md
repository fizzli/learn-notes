git init

git status

git add

git commit -m ''

git log --pretty=oneline

git reset --hard HEAD~1

git reflog 操作记录

git版本库中有暂存区（stage/index）、分支master。

git add 把修改的文件提交到暂存区，git commit 把暂存区中的文件提交到分支。

git checkout --file ：从分支或者暂存区检出文件

git checkout <name>：切换分支

git checkout -b 新分支名字：新建分支并切换

git branch 查看分支

git branch <name> 创建分支

git merge <name> 合并某分支到当前分支

git branch -d <name> 删除分支

git branch -D <name> 强制删除分支

git tag 查看标签信息

git tag -a <tagname> -m 'balabala' 制定标签信息

git push origin <tagname> 推送本地标签

git tag -d <tagname> 删除本地标签

git push origin :refs/tages/<tagname> 删除远程标签