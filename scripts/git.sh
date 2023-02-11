#!/bin/sh
SUBMODULE_MEDIA='public/static/images/media'
git pull && cd $SUBMODULE_MEDIA && git pull;
