# Folder Structure

## App

```text
├── .github
│   └── templates
├── .husky
│   └── husky pre-commit scripts
├── .storybook
│   └── storybook configuration
├── docker
│   └── dockerfiles
├── docs
│   └── each possible doc goes here
├── packages
│   └── applications 
├── scripts
└── static
```

### Packages

```text
├── app
│   ├── main application folder
│   ├── dist
│   │   └── build folder
│   ├── node_modules
│   ├── src
│   │   ├── common.components
│   │   │   ├── components that are used across app
│   │   ├── components
│   │   │   ├── pages are stored here
│   │   ├── containers
│   │   │   ├── providers are stored here
│   │   ├── services
│   │   │   └── third party services related files
│   │   ├── store
│   │   │   ├── redux store
│   │   ├── utils
│   │   │   ├── reusable tools across app
├── platform-apis
│   ├── API related utilities folder
│   ├── mock
│   │   └── stores different mocks
│   ├── slices
│   │   ├── react-query slices
│   ├── types
│   │   ├── API types
└── platform-components
    ├── components that are used by each possible application,
    │   storybook also goes here 
    ├── src
    │   ├── components
    │   │   ├── explicitly components
    │   │   └── constants.ts
    │   ├── containers
    │   │   ├── overall containers
    │   ├── design
    │   │   ├── all scss constants, mixins, etc. 
    │   ├── hooks
    │   │   ├── custom hooks
    │   ├── typings
    │   │   ├── common typings
    │   └── utils
    │       ├── reusable tools across each possible app
    └── stories
        └── storybook stories
```
