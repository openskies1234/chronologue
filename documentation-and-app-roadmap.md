# Chronologue App and Documentation plan

This document lays down some fundamentals regarding the Chronologue app and plans the initial set of documentation. 
The API data is stored in this repository and deployed with Netlify. 
The documentation will be written and maintained in the Good Docs [website repo](https://github.com/thegooddocsproject/website-hugo). 

## Who will find the Chronologue useful 
- Casual readers
- Developers
- Technical writers


## Documentation plan

### Target audience 

Who we need to write documentation for:
- End users / Scientists
- Developers
- Technicians (fictional)

### Use cases

Use cases are we supporting:
- Viewing entries
- Requesting viewing time
- Adding new entries

### Content outline

|Title   |Content Type   |Tests Template   | Description  | Audience | Assigned to |
|---|---|---|---|---|----|
|Getting started with Chronologue  | Getting started  | [Quickstart](https://github.com/thegooddocsproject/templates/tree/dev/quickstarts)  | Explains how to find an event and view it.  | End users  | Tina
|How Chronologue works  |Concept   | [Explanation](https://github.com/thegooddocsproject/templates/tree/dev/explanation)  | Explains scientific background. [Written down here](https://github.com/thegooddocsproject/chronologue/wiki/Technology-of-the-Chronologue-telescope-explained)  This is a preliminary draft, will evolve with "Parts of the time travel telescope".  | Scientist | Tina (draft), Valeria (review)|
| The recording process explained  |  Concept | [Explanation](https://github.com/thegooddocsproject/templates/tree/dev/explanation)  | Scientist  | Explains who is involved in the decision making process to grant permission to the Chronologue telescope. |  Peter |
|  How Chronologue API works | Concept  | [API Overview](https://github.com/thegooddocsproject/templates/tree/dev/api-overview)  |Explains the architecture of the API on a higher level   | Scientist, Developer  | Valeria|
| Parts of the Chronologue Time Travel Telescope  |  Concept |  [Explanation](https://github.com/thegooddocsproject/templates/tree/dev/explanation)  | Explains the parts that the telescope is made of. | Technicians  |Ricky, Serena for Graphics|
| Requesting a new recording | How-to  | [How-to](https://github.com/thegooddocsproject/templates/tree/dev/how-to) | Explains how to submit a new request for time-travel. |Scientist   |Peter|
| Adding new entries to the Chronologue catalog  | How-to   |  [API quickstart](https://github.com/thegooddocsproject/templates/tree/dev/api-quickstart) |  Explains how a developer uses a POST request to add more information | Developer  |Tina|
| Chronologue API reference  |API reference   |  [API reference](https://github.com/thegooddocsproject/templates/tree/dev/api-reference) ! Probably updated soon | List of all endpoints.  | Developers  |Sakura and Valeria, SME: Ian|
| Bug reporting |How-to  |  [How-to](https://github.com/thegooddocsproject/templates/tree/dev/how-to) | Explains how to report API bugs and other issues with the Chronologue wenbsite.  | Developers  |Tina|
| Troubleshooting Framework  |Troubleshooting   |  ? | General steps to prepare for a troubleshooting task.| Technicians  |Ricky|
| Troubleshooting defect XYZ  |Troubleshooting   |  ? | This would go in greather depth than the general troubleshooting topic. What could we "break" that would need troubleshooting?  | Technicians  |?|
|Glossary   | Glossary  | [Glossary] (https://docs.google.com/document/d/1VpkuP3kCAG454WPwYf_rXbk5fBcnK0wAryKm3yB2kiU/edit) | Explains terminology used in this project  | End users, Scientists, Technicians  |Sakura & Tina|
| Release Notes  | Changelog   |  ? | Describes which features we introduced and why or what features we deprecated  |  Developers |Tina/ Ian|

<!-- 
Column
|   |   |   |   |   |
-->

## App plan: About The Chronologue API

## Licence 
The API will use Zero clause BSD.

## Types of Documentation needed

> Note: The documents mentioned below are part of the documentation plan. We list the documents here as well for a better overview. 

The API needs the following documentation: 
- API reference: Endpoints and routes
- Concept explanation guide
- Quick start guide
- Bug reporting guide

## Future features
**Note**: Since the app is hosted on Netlify, all future feature implementations must be compatible with Netlify. 

- User authentication using OAuth 2.0 
    - Current plan is to use NextAuth.js or other Netlify-supported plugin to enable authentication.
- ~~API cache will be handled by Next.js and Netlify~~ 

# Contributing
You can start contributing to the following parts of the repository: 
- API data, located in: `/data/fragments`
- Next.js web view and app logics. You can help make The Chronologue look more polished and functional by contributing to program code. You should be familiar to the following concepts:
    - React library
    - Next.js framework
    - Netlify hosting infrastructure
