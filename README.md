# [Project-Name]
![dependencies](https://david-dm.org/ServiceInnovationLab/[Project-Name].svg)
[![CircleCI](https://circleci.com/gh/ServiceInnovationLab/[Project-Name].svg?style=svg)](https://circleci.com/gh/ServiceInnovationLab/[Project-Name])

This runs [on github pages](https://serviceinnovationlab.github.io/[Project-Name]/)

## Overview
A React frontend for [Project-Name]

## Environments
**Environment** | **URL**  | **Git Branch**
--- | --- | ---
Github Pages | https://serviceinnovationlab.github.io/[Project-Name]/ | master |

## Project Resources

**Resource** | **URL**
--- | ---
Backlog | https://waffle.io/ServiceInnovationLab/[Project-Name]
CI | https://circleci.com/gh/ServiceInnovationLab/[Project-Name]

**Role(s)** | **Name(s)**
--- | ---
Team | [Project-Name]
Developers | [Developers Name](https://github.com/[Developers Username])
Designers |
Testers |
Project Manager |
Product Owner |

## Comms
Slack: LabPlus-team #[Project-Name]

## Setup

## Development

Make a copy of the example environment file containing some important settings
```
cp example.env .env
```

To install dependencies, cd into folder and run
```
npm install
```

To run a development server:
```
npm start
```

### Major Dependencies
- React (^16.6.3)


### Quality assurance tools

- jest
- cucumber

## Deployment

To deploy to github pages, checkout the branch you want to deploy and then run
```
npm run deploy
```

To build a static copy instead, run:
```
npm run build
```

## Testing

To run Jest tests
```
npm test
```

To run Cucumber tests (not currently included in the CI pipeline)
```
npm run cucumber
```
Cucumber reports are generated in `features/reports/cucumber-report.html`
