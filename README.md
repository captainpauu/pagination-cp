# Pagination-cp

A library to add pagination to your data. It is very simple and easy to use.

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
    <div>
        <div class="page-rows"><h3>1</h3></div>
        <div class="page-rows"><h3>2</h3></div>
        <div class="page-rows"><h3>3</h3></div>
        <div class="page-rows"><h3>4</h3></div>
        <div class="page-rows"><h3>5</h3></div>
        <div class="page-rows"><h3>6</h3></div>
        <div class="page-rows"><h3>7</h3></div>
    </div>
    <ul class="pagination">
    </ul>
</div>
</body>
```
Default pagination:
![default](assets/default_pagination.png)
```javascript
pagination.getPagination({
    tableId: 'page-table',
    rowClass: 'page-rows',
    maxRows: 10  //default 5
});
```
Show first and last buttons:
![first_last_btn](assets/first_last_btns.png)
```javascript
pagination.getPagination({
    tableId: 'page-table',
    rowClass: 'page-rows',
    maxRows: 5,
    showFirstBtn: true,
    showLastBtn: true,
});
```
Without buttons:
![no_buttons](assets/no_buttons.png)
```javascript
pagination.getPagination({
    tableId: 'page-table',
    rowClass: 'page-rows',
    maxRows: 5,
    showPreviousBtn: false,
    showNextBtn: false,
});
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