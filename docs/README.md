# Global-chat <http://global-chat.ru/>

## Docs

- [General](general/README.md)
- [Folder structure](folder-structure/README.md)
- [How it works](how-it-works/README.md)

## Description

This service uses user messages to plot graphs, statistics, this is not a public database. Statistics are kept for the Russian segment of Twitch. There are both global statistics and for each user individually.

Initially created during learning golang as a pet project. First of all i developed little library for interaction with twitch helix API [go-twitсh](https://github.com/holypower777/go-twitch), which was later used in this service for some requests to the Twitch API. After a while mine service was used to moderate channels on twitch, track bots and spammers.

## Tech stack

> frontend

Typescript, React, Redux, Sass, Storybook

> backend

Golang, Gin, go-twitch-irc

> database

Postgresql, firestore, flagsmith
