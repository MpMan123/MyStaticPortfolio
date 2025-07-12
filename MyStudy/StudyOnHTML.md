# STUDY ON HTML


## Attributes
- 🔗 href (To insert a hyperlink) `<a href = "link" text </a>`
- 📷 src (To embed a image) `<img src="file" </img>`
  - If the image file isn't in the same folder as the index.html file, use `/image/file`
  - Adjusting images: `<img src="file" width="500" height="600"</img>`
  - 🎞️ alt (shows up when there is no reference to the image currently used)
- 👓 style (Adjusting color, shapes, etc) `<p style="color:red"> text </p>`
- lang (inside *html* tag) (Declare the language of Web page): `<html lang="en"> ... </html>`
- title (title of Web page): `<title> ... </title>`
  - Title of text: `<p title="hello"> </p>`
## Paragraph
- Define a horizontal break `<hr>`
- Line breaks: `<br>`
- Preserve line breaks and space: `<pre> ... </pre>`
## Style
Main syntax `<tagname style="property:value;"> </tagname>`
||Property|
|-|-------|
|Background color| `background-color`|
|Text color| `color`|
|Fonts| `font-family`|
|Text size| `font-size=100%`|
|Text Alignment| `text-align`|

| Color      |       Code       |
|------------|:----------------:|
| Red        | `tomato`         |
| Orange     | `Orange`         |
| Blue       | `DodgerBlue`     |
| Green      | `MediumSeaGreen` |
| Gray       | `Gray`           |
| Purple     | `SlateBlue`      |
| Pink       | `Violet`         |
| Light Gray | `LightGray`      |
## Text formatting
||Format|
|-|---|
|Bold|`<b> </b>`|
|Important text|`<strong> </strong>`|
|Italic text|`<i> </i>`|
|Emphasized text(alike italic)|`<em> </em>`|
|Small text|`<small> </small>`|
|Mark(highlight)|`<mark> </mark>`|
|Line through text|`<del> </del>`|
|Inserted text|`<ins> </ins>`|
|Subscript text|`<sub> </sub>`|
|Superscript text|`<sup> </sup>`|
## Quotation
||Quotations|
|-|----------|
|Quote from another source|`<blockquote cite="link"> </blockquote>`|
|Small quote|`<q> </q>`|
|Abrreviation|`<abbr title="text"> .. </abbre>`|
|Address|`<address> ... </address>`|
|Define one's work's title|`<cite> </cite>`|
## Comments
||Comments|
|-|---|
|Add content|`<!-- .... -->`|

## Color
- RGB `rgb(a,b,c)`
  - a: red
  - b: green
  - c: blue
- Hex `#rrggbb`
- Hsl  `hsl(hue, saturation, lightness)`
  - Hue: degree from `0-360`
  - saturation: percentage `0-100%`
  - lightness: percentage `0-100%`
## HTML CSS
**Link to External CSS** `<link rel="stylesheet" href="file_path">`
Main syntax: `tagname { .... }`
| Border of an element          |  border |
|-------------------------------|:-------:|
| Space between text and border | padding |
| Space outside the border      | margin  |
## Links
Main syntax `<a href="url" link text </a>`
- Specifying where to open the linked document `<a href="url" target="..">....</a>`
  
| **Open in**     | **target** |
|-----------------|------------|
| Same window/tab |    _self   |
| New window/tab  | _blank     |
| Parent frame    | _frame     |
- Open in same Web page: **No** `https://www`
- Link Colors in `style.css`: `a:link {....}`
- URL can be used as **Email address**
- Button as a link: `<button onclick="documen.location='url'"> text </button>`
- Insert icon into the page title `<link rel="icon" type="image/x-icon" href="url">`
