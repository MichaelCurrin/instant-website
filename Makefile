default: install

all: hooks install check build

h help:
	@grep '^[a-z]' Makefile


.PHONY: hooks
hooks:
	cd .git/hooks && ln -s -f ../../hooks/pre-push pre-push

install:
	npm install

outdated:
	npm outdated

upgrade:
	npm upgrade


check:
	npm run fmt:check

fix:
	npm run fmt:fix


s serve:
	npm start


build: fix test
	npm run build

# Build, increment tag and push release.
tag:
	npm version minor
