Release History
---------------
## [Unreleased]

# [1.0.0-alpha.3] - 2017-09-28
### Fixed
- Bg-item class was not exported correctly.

# [1.0.0-alpha.2] - 2017-09-27

### Breaking changes
- Bootgrid item properties have changed, e.g. `xs` has been changed to `size`, `sm` to `smSize`, `xsOrder` to `position`, `smOrder` to `smPosition` etc. to conform with bootstrap dropping `xs` from names. `size` and `position` are used by default for all screen sizes unless something else is specified for a given breakpoint. 

### Fixed
- Dragula grid is destroyed when bootgrid is destroyed (see issue #5).
- ~~Grid uses next available position when sorting (see issue #7).~~ (temporary disabled in favour for other feature)
- Bootgrid item id generation.
- ~~Accept children when moving grid item (see issue #9).~~ (temporary disabled in favour for other feature)

### Added
- Added interface for bootgrid item.
- Ability to use fixed sizes using size rules.


# [1.0.0-alpha.1] - 2017-05-02

### Breaking changes
- Bumped angular version, Angular Bootgrid now requires Angular 4+ (see issue #3).

### Fixed
- Disable drag check for SVG elements (see issue #1).
- Each grid instance will get a unique id (see issue #4).

# [1.0.0-alpha.0] - 2017-01-30

### Added
- Examples

