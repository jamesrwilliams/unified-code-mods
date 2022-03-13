# Unified Code Mods

[![Project Status: Concept – Minimal or no implementation has been done yet, or the repository is only intended to be a limited example, demo, or proof-of-concept.](https://www.repostatus.org/badges/latest/concept.svg)](https://www.repostatus.org/#concept) [![Test](https://github.com/jamesrwilliams/unified-code-mods/actions/workflows/node.js.yml/badge.svg)](https://github.com/jamesrwilliams/unified-code-mods/actions/workflows/node.js.yml)

# Goal

Automatically apply code-mods to source code to make it compatible with a newer version of a 
library. For example a new major version introduces changes to how a user needs to have their 
HTML, CSS and JS, this project aims to facilitate the automatic application of these 
modifications.

## Rationale

This project was born out of an idea to support the following (niche) scenario 

- You develop an in-house front-end API library
- This library has hundreds of unique HTML/CSS/JS projects that use it
- Breaking change in API library typically requires manual migration of each unique consumer 
  project
- This project aims to provide a way to encapsulate code modifications for them to be played 
  back over different consumer projects to mass upgrade between breaking changes.

# Roadmap

- HTML
  - Elements
    - rename - Planned
  - Attributes
    - Create - Planned
    - Update - In Progress
    - Delete - Planned
- JSON (key value pairs)
  - Create - Planned
  - Rename - Planned
  - Update - Planned

## Modification API

TBC

## See also

- https://github.com/syntax-tree/unist-util-select - Select nodes based on css like selectors 
  (with limitations)
