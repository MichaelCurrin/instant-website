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

test:
	npm run test:all


s serve:
	npm start

build:
	npm run build


deploy: install check build

# Build, increment tag and push release.
tag:
	npm version minor
