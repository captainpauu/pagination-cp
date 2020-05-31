# Pagination-cp

A library to add pagination to your data. It is very simple and easy to use.

Want to see how it functions, [Click me](https://jsfiddle.net/captainpauu/d6fg0hea/1/).

![Pagination](assets/default_complete_paginate.png)

## Installation
Use the node package manager [npm](https://www.npmjs.com/) to install pagination-cp
```
npm install --save pagination-cp
```

Or download the .zip and include file from dist folder dist/index.js

```html
<script type="text/javascript" src="index.js"></script></body>
```

## Usage
JavaScript
```
let pagination = new Pagination();
page.getPagination({options});
```
For ES6 add following line
```ecmascript 6
import Pagination from 'pagination-cp'
```
## Examples

Prerequisite: 
1. `tableId` => An id of div wrapping your rows and pagination ul
2. `rowClass` => A common class to all rows 
3. an unordered empty list with classname `pagination`.

You can refer dist/index.html for full example.
 
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
#### Default pagination:
![default](assets/default_paginate.png)
```javascript
pagination.getPagination({
    tableId: 'page-table',
    rowClass: 'page-rows',
    maxRows: 10  //default 5
});
```
#### Show first and last buttons:
![first_last_btn](assets/first_last_btn.png)
```javascript
pagination.getPagination({
    tableId: 'page-table',
    rowClass: 'page-rows',
    maxRows: 5,
    showFirstBtn: true,
    showLastBtn: true,
});
```
#### Without Previous and next buttons:
![no_buttons](assets/without_prev_next_btn.png)
```javascript
pagination.getPagination({
    tableId: 'page-table',
    rowClass: 'page-rows',
    maxRows: 5,
    showFirstBtn: true,
    showLastBtn: true,
    showPreviousBtn: false,
    showNextBtn: false,
});
```

#### with border:
![without_border](assets/bordered_paginate.png)

Add class `pagination-bordered` to ul tag
```html
<ul class="pagination pagination-bordered">
</ul>
```
## Options
```
tableId         => required  => An id of div wrapping your rows and pagination ul

rowClass        => required  => A common class to all rows

maxRows         => optional  => maximum no. of rows/items per page, (default 5)

showFirstBtn    => optional  => to show First button (default false)

showLastBtn     => optional  => to show Last button (default false)

showPreviousBtn => optional  => to show Previous button (default true)

showNextBtn     => optional  => to show Next button (default true)

```

# Thank You!