# My Study On CSS

## Padding, Margin
Instead of specifying one's element properties such as `padding-top`, `padding-left`, etc. We can specify them all in one

`padding: 10px 20px 43px 50px`
These four values work like a clock: *top, right, bottom, left*

A similar approach is applicable to *margin* as well.

## Selectors
```
[type='radio'] {
  margin: ...
}
```

## Length units
- Inches `in`
- Milimeters `mm`
- Relative units
  - `rem`, `em`: relative to parent's font-size

## Precedence
1. `!important`
2. Inline style
3. Id
4. Last class

## Variables
- `--name:gray` Assign *name* the value of gray
- Get variables' value: `var(--name)`
- Fallback value: `var(--name, black)` --> Black is set to background when the variable wasn't set

## Flex Box
- `display:flex` --> Every content are placed horizontally
- The default value for `flex-direction` is `row`
  
||Value|
|-|------|
|Reversed row|`reverse-row`|
|Reversed column|`reverse-column`|
|Content placed in column|`column`|
|Content placed in row|`row`|

### Align elements through *MAIN axis* using *justify-content*
Main syntax `justify-content:center`
||Value|
|-|------|
|Item placed in center|`center`|
|Push items to the left or top|`flex-start`|
|Push items to the right or bottom|`flex-end`|
|Push the first and last items to the very edge|`flex-between`|
|First and last items are not locked to the very edge|`flex-around`|
|Spaces are distributed evenly between items|`flex-evenly`|
### Align elements through *CROSS axis* using *justify-content*
Main syntax `align-items:center`
||Value|
|-|----|
|Push items to left or top|`flex-start`|
|Push items to right or bottom|`flex-end`|
|Equal space to the left and right of items|`center`|
|(Default value) fill the container|`stretch`|
|Place on a text concept|`Baseline`|
### Fit items in container
Main syntax `flex-wrap:wrap`
||Value|
|-|-|
|Items are not wrapped|`nowrap`|
|Items are wrapped on multiple lines|`wrap`|
|Reverse order|wrap-reverse|

### Shrink and expand Items
Allowed to shrink when the container is too small

Main syntax `flex-shrink:number` and `flex-grow:number`

Items will shrink `number/total * original size` 

Items will expand `number/total * extra space`

### Flex basis
Specifies the initial size of the item (px, em, %)
