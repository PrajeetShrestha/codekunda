#!/bin/bash

# Prompt for Filename
read -p "Enter the filename (without date): " user_filename

# Get Current Date
current_date=$(date +%Y-%m-%d)

# Ensure the filename ends with .html
if [[ $user_filename != *.html ]]; then
    user_filename+=".html"
fi
full_filename="${current_date}-${user_filename}"

# Create the File in the _posts folder with Jekyll front matter
{
echo "---"
echo "layout: post"
echo "title: \"Your Title Here\""
echo "date: $current_date"
echo "tags: [tags_here_separated_by_commas]"
echo "comments: true"
echo "---"
} > "_posts/$full_filename"

echo "New post created: _posts/$full_filename"

# Optional - Open the file for editing
# nano "_posts/$full_filename"