# Code Kunda 

## Overview
- This project is build on [Jekyll](https://jekyllrb.com/). 
- With the help of .md file it creates a html page. 


## How to build and run
### Tools Needed / Scripts to run
1. gem install bundler jekyll
2. ```bundle install```
3. gem install -n /usr/local/bin jekyll
4. bundle exec jekyll serve

### You may run following commands before you can run ```gem install bundler jekyll```
You may need to add ruby or home brew (these instructions are for apple silicon)
- Install HomeBrew: ```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"```


Add paths to the zprofile for current and future sessions run these two commands 
1. ```(echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> ~/.zprofile```
2. ```eval "$(/opt/homebrew/bin/brew shellenv)"```


Install Ruby: 
```brew install ruby ```
Add ruby to path: ```echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zprofile```
Refresh for current terminal session: ```source ~/.zprofile```

``bundle install``