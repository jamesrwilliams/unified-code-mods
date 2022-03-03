# Unified Code Mods

## Goal

Automatically apply code-mods to source code to make it compatible with a newer version of a 
library. For example a new major version introduces changes to how a user needs to have their 
HTML, CSS and JS, this project aims to facilitate the automatic application of these 
modifications.

### Example migrations:

- Create / Update / Delete JSON Keys and values
- Renaming of certain API variables
- CSS class name updates / removals
- Updates to HTML elements and attributes 


## API

```typescript
class ExampleModification extends Modification {
  
}
```
