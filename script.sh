FILENAME=$1
post() {
  touch ./_posts/$(date '+%Y-%m-%d')-$FILENAME.html
}
post