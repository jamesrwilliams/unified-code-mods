# Unified Code Mods

[![Project Status: Concept – Minimal or no implementation has been done yet, or the repository is only intended to be a limited example, demo, or proof-of-concept.](https://www.repostatus.org/badges/latest/concept.svg)](https://www.repostatus.org/#concept)

- [Roadmap](https://github.com/jamesrwilliams/unified-code-mods/projects/1)
- [API Discussion](https://github.com/jamesrwilliams/unified-code-mods/discussions/1)

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

If you're looking for a Javascript/Typescript focused modification library I recommend you take a 
look at [jscodeshift](https://github.com/facebook/jscodeshift).

## See also

- https://github.com/syntax-tree/unist-util-select - Select nodes based on css like selectors 
  (with limitations)
- https://unifiedjs.com/
