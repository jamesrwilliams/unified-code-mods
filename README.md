# Unified Code Mods

## Goal

Automatically apply code-mods to source code to make it compatible with a newer version of a 
library. For example a new major version introduces changes to how a user needs to have their 
HTML, CSS and JS, this project aims to facilitate the automatic application of these 
modifications.

### Example migrations:

| Input Type | Targets                      | Operations           |
|------------|------------------------------|----------------------|
| HTML       | Elements                     | rename               |
| HTML       | Attributes (keys and values) | create/rename/update |
| JSON       | Keys and values              | create/rename/update |

## API

```typescript
class ExampleModification extends Modification {
  
}
```
