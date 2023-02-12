#!/bin/sh
SUBMODULES=('public/static/images/media')
git pull
# && cd $SUBMODULE_MEDIA && git pull;
for i in "${SUBMODULES}"
do
    cd "$i" && git pull;
done
