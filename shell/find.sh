find . -type f -not -name 'result_.txt' -not -name 'find.sh' -exec egrep -inH 'con' {} + >result_.txt
