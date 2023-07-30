#!/bin/bash
commit=$(git cat-file commit HEAD)
sha1=($((printf "commit %s\0" $(echo "$commit" | wc -c); echo "$commit") | sha1sum))
echo ${sha1[0]} > commit.txt
