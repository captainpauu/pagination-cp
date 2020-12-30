# Pagination-cp

A plugin to add pagination to your data. It is very simple and easy to use with many customizable options.
It supports simple to standard pagination UI and available in multiple colors.

![Pagination](https://user-images.githubusercontent.com/50410774/103346711-d69e4080-4aba-11eb-9505-922243f97d07.png)


## Installation
Use the node package manager [npm](https://www.npmjs.com/) to install pagination-cp
```
npm install --save pagination-cp
```

Or download the .zip and include file from dist folder dist/index.js

```html
<script type="text/javascript" src="index.js"></script>
```

## Examples

Prerequisite: 
1. `tableId` => An id of div wrapping your rows and pagination ul
2. `rowClass` => A common class to all rows 
3. an unordered empty list with classname `pagination`.

Refer dist/index.html for full example.
 
 ```html
<body>
<div id="page-table">
    <table class="tftable">
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
            </tr>
            <tr class="page-rows">
                <td>Row:1 Cell:1</td>
                <td>Row:1 Cell:2</td>
            </tr>
            <tr class="page-rows">
                <td>Row:2 Cell:1</td>
                <td>Row:2 Cell:2</td>
            </tr>
            .
            .
            .
            <tr class="page-rows">
                <td>Row:2 Cell:1</td>
                <td>Row:2 Cell:2</td>
            </tr>
    </table>
    <ul class="pagination">
    </ul>
</div>
</body>
```

## Usage

JavaScript
```
let pagination = new Pagination();
page.getPagination({options});
```

For ES6 add following line

```
import Pagination from 'pagination-cp'
```

### JS

#### Default pagination:
![default](https://user-images.githubusercontent.com/50410774/103346797-22e98080-4abb-11eb-8e09-15a92dd94b67.png)
```javascript
pagination.getPagination({
    tableId: 'page-table',
    rowClass: 'page-rows',
    maxRows: 5
});
```

#### Different Themes:
```javascript
pagination.getPagination({
    tableId: 'page-table',
    rowClass: 'page-rows',
    maxRows: 5,
    theme: 'basic'
});
```

| Theme option | UI |
| --- | :---: |
| micro| ![micro_theme](https://user-images.githubusercontent.com/50410774/103346828-3b599b00-4abb-11eb-978e-f0b4a88eed43.png) |
| mini | ![mini_theme](https://user-images.githubusercontent.com/50410774/103346840-47ddf380-4abb-11eb-849c-b076659c3ab2.png) |
| basic| ![basic_theme](https://user-images.githubusercontent.com/50410774/103346862-575d3c80-4abb-11eb-8140-caaa077d7143.png) |
| standard| ![standard_theme](https://user-images.githubusercontent.com/50410774/103346797-22e98080-4abb-11eb-8e09-15a92dd94b67.png) |

#### Show first and last buttons:
![first_last_btn](https://user-images.githubusercontent.com/50410774/103346711-d69e4080-4aba-11eb-9505-922243f97d07.png)
```javascript
pagination.getPagination({
    tableId: 'page-table',
    rowClass: 'page-rows',
    maxRows: 5,
    firstBtn: {
        display: true,
        label: 'First'
    },
    lastBtn: {
        display: true,
        label: 'Last'
    }
});
```

#### Without Previous and next buttons:
![no_buttons](https://user-images.githubusercontent.com/50410774/103346952-925f7000-4abb-11eb-8fe1-87ef3b2d9802.png)
```javascript
pagination.getPagination({
    tableId: 'page-table',
    rowClass: 'page-rows',
    maxRows: 5,
    previousBtn: {
        display: false
    },
    nextBtn: {
        display: false
    }
});
```

#### Always show Fist and Last Page number:
![first_last_page_num](https://user-images.githubusercontent.com/50410774/103346982-a1462280-4abb-11eb-9707-dc94719f9c4f.png)
```javascript
pagination.getPagination({
    tableId: 'page-table',
    rowClass: 'page-rows',
    maxRows: 5,
    showFirstPageNum: true,
    showLastPageNum: true,
});
```

#### Add Go To Page:
![first_last_page_num](https://user-images.githubusercontent.com/50410774/103346999-adca7b00-4abb-11eb-85cf-0128332b7083.png)
```javascript
pagination.getPagination({
    tableId: "page-table",
    rowClass: "page-rows",
    maxRows: 5,
    goToPageBtn: {
        display: true,
        label: 'Jump On'
    }
});
```

### CSS

#### With Border:
![without_border](https://user-images.githubusercontent.com/50410774/103347012-ba4ed380-4abb-11eb-9b66-9582f439ad24.png)

Add class `pagination-bordered` to ul tag
```html
<ul class="pagination pagination-bordered">
</ul>
```

#### Circular Page Items:
![circular](https://user-images.githubusercontent.com/50410774/103347035-c6d32c00-4abb-11eb-99b0-23b7c9cc53e3.png)

Add class `circular` to ul tag
```html
<ul class="pagination circular">
</ul>
```

#### Apply colors:
Add class `color--<color-name>` to ul tag
```html
<ul class="pagination color--green">
</ul>
```

Available colors

| Color | Value | UI |
| ----- | ----- | :-----: |
| color--green | #2abbac | ![color_green](https://user-images.githubusercontent.com/50410774/103347063-de121980-4abb-11eb-908e-85a5056cf842.png) |
| color--red | #fb3548 | ![color_red](https://user-images.githubusercontent.com/50410774/103347068-dfdbdd00-4abb-11eb-968a-89dd54a792b4.png) |
| color--blue | #4385f5 | ![color_blue](https://user-images.githubusercontent.com/50410774/103347060-dbafbf80-4abb-11eb-8c6a-3a91290b5770.png) |
| color--orange | #fa6f01 | ![color_orange](https://user-images.githubusercontent.com/50410774/103347064-deaab000-4abb-11eb-98c4-e50f8d475b85.png) |
| color--dark | #2e2e2e | ![color_dark](https://user-images.githubusercontent.com/50410774/103347061-dce0ec80-4abb-11eb-8447-e79825b0ba00.png) |
| color--purple | #5d35b0 | ![color_purple](https://user-images.githubusercontent.com/50410774/103347067-df434680-4abb-11eb-848c-5910c6346d61.png) |

## Options

| Option | Sub-Option | Type | Required? | Default | Description |
| :--- | --- | --- | --- | :---: | --- |
| tableId | - | String | Required | - | An id of div wrapping all rows and pagination ul element|
| rowClass | - | String | Required | - | A common class to all rows|
| maxRows | - | Integer | Optional | 5 | Maximum number of rows/items per page|
| theme | - | String | Optional | standard | Different themes for pagination. Theme options are `mini`, `micro`, `basic`, `standard`. Below Pagination options (except goToPageBtn) work only for `standard` theme. |
| firstBtn | display | Boolean | Optional | false | Show first button|
|  | label | String | Optional | First | Custom Label for first button|
| lastBtn | display | Boolean | Optional | false | Show Last button|
|  | label | String | Optional | Last | Custom Label for last button|
| previousBtn | display | Boolean | Optional | true | Show previous button|
|  | label | String | Optional | `<<` | Custom Label for previous button|
| nextBtn | display | Boolean | Optional | true | Show next button|
|  | label | String | Optional | `>>` | Custom Label for next button|
| goToPageBtn | display | Boolean | Optional | false | Show Go To Page Input|
|  | label | String | Optional | Go To Page | Custom Label for Go To Page Input|
| showFirstPageNum | - | Boolean | Optional | false | Always show first page number|
| showLastPageNum | - | Boolean | Optional | false | Always show last page number|

## Feedback
For issues or suggestions please see [pagination-cp](https://github.com/captainpauu/pagination-cp) on Github.
Thank You for your support!
