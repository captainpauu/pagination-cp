import $ from 'jquery';

export default class Pagination {

    constructor() {
        this.currentPage = 1;
        this.lastPage = 1;
        this.maxRows = 5;
        this.tableId = '';
        this.allRows = '';
        this.totalRows = 0;
        this.showFirstBtn = false;
        this.showLastBtn = false;
        this.showPreviousBtn = true;
        this.showNextBtn = true;
    }

    bindEvents() {
        $('#first-btn').off('click').on('click', () => {
            this.pageChanged(1);
        });

        $('#previous-btn').off('click').on('click', () => {
            this.pageChanged(this.currentPage - 1);
        });

        $('#next-btn').off('click').on('click', () => {
            this.pageChanged(this.currentPage + 1);
        });

        $('#last-btn').off('click').on('click', () => {
            this.pageChanged(this.lastPage);
        });

        $('.page-item a.numbered').off('click').on('click', (e) => {
            let pageNum = Number($(e.currentTarget).data('number'));
            this.pageChanged(pageNum);
        });
    }

    firstBtnPageItem() {
        return `<li class="page-item">`
            + `<a class="page-link" id="first-btn" aria-label="First">First</a>`
            + `</li>`;
    }

    previousBtnPageItem() {
        return `<li class="page-item">`
            + `<a class="page-link" id="previous-btn" aria-label="Previous">`
            + `<span aria-hidden="true">&laquo;</span>`
            + `</a></li>`;
    }

    nextBtnPageItem() {
        return `<li class="page-item">`
            + `<a class="page-link" id="next-btn" aria-label="Previous">`
            + `<span aria-hidden="true">&raquo;</span>`
            + `</a></li>`;
    }

    lastBtnPageItem() {
        return `<li class="page-item">`
            + `<a class="page-link" id="last-btn" aria-label="Last">Last</a>`
            + `</li>`;
    }

    pageItem(pageNum) {
        return `<li class="page-item">`
            + `<a class="page-link numbered" data-number="${pageNum}">${pageNum}</a>`
            + `</li>`;
    }

    extraPageItem() {
        return `<li class="page-item">`
            + `<a class="page-link disabled">...</a>`
            + `</li>`;
    }

    createPagination() {
        let pagination = $(`#${this.tableId} .pagination`);
        let html = '';

        if (this.totalRows > this.maxRows) {
            if (this.showFirstBtn) {
                html += this.firstBtnPageItem();
            }
            if (this.showPreviousBtn) {
                html += this.previousBtnPageItem();
            }

            html += this.createPageItems();

            if (this.showNextBtn) {
                html += this.nextBtnPageItem();
            }
            if (this.showLastBtn) {
                html += this.lastBtnPageItem();
            }

            pagination.html(html).show();
            this.bindEvents();
        } else {
            pagination.hide();
        }
    }

    createPageItems() {
        let html = '';
        this.lastPage = Math.ceil(this.totalRows / this.maxRows);

        if (this.currentPage <= 5) {
            for (let i = 1; i <= 5; i++) {
                html += this.pageItem(i);
            }
            if (this.lastPage > 5) {
                html += this.extraPageItem();
            }
        } else if (this.currentPage > 5 && this.currentPage < this.lastPage - 4) {
            html += this.extraPageItem();
            for (let i = this.currentPage - 2; i <= this.currentPage + 2; i++) {
                html += this.pageItem(i);
            }
            html += this.extraPageItem();
        } else if (this.currentPage >= this.lastPage - 4) {
            html += this.extraPageItem();
            for (let i = this.lastPage - 4; i <= this.lastPage; i++) {
                html += this.pageItem(i);
            }
        }

        return html;
    }

    pageChanged(pageNum) {
        $('.pagination .page-item a[data-number=' + this.currentPage + ']').removeClass('active');

        this.currentPage = pageNum;
        this.createPagination(this.tableId);

        $('.pagination .page-item a[data-number=' + pageNum + ']').addClass('active');
        if (this.currentPage === 1) {
            $('.pagination #previous-btn').addClass('disabled');
            $('.pagination #first-btn').addClass('disabled');
        } else {
            $('.pagination #previous-btn').removeClass('disabled');
            $('.pagination #first-btn').removeClass('disabled');
        }

        if (this.currentPage === this.lastPage) {
            $('.pagination #next-btn').addClass('disabled');
            $('.pagination #last-btn').addClass('disabled');
        } else {
            $('.pagination #next-btn').removeClass('disabled');
            $('.pagination #last-btn').removeClass('disabled');
        }

        this.showItems();
    }

    showItems() {
        let row = 0;
        this.allRows.each((i, element) => {
            row++;
            if (row > (this.maxRows * this.currentPage)
                || row <= ((this.maxRows * this.currentPage) - this.maxRows)) {
                $(element).hide();
            } else {
                $(element).show();
            }
        });
    }

    getPagination(data) {
        this.currentPage = 1;
        this.tableId = data.tableId;
        this.allRows = $(`#${data.tableId} .${data.rowClass}`);
        this.totalRows = this.allRows.length;
        this.maxRows = typeof data.maxRows !== "undefined" ? data.maxRows : this.maxRows;
        this.showFirstBtn = typeof data.showFirstBtn !== "undefined" ? data.showFirstBtn : this.showFirstBtn;
        this.showLastBtn = typeof data.showLastBtn !== "undefined" ? data.showLastBtn : this.showLastBtn;
        this.showPreviousBtn = typeof data.showPreviousBtn !== "undefined" ? data.showPreviousBtn : this.showPreviousBtn;
        this.showNextBtn = typeof data.showNextBtn !== "undefined" ? data.showNextBtn : this.showNextBtn;

        this.pageChanged(this.currentPage);
    }
}