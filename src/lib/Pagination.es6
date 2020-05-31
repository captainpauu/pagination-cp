import $ from "jquery";

const STANDARD_THEME = "standard";
const BASIC_THEME = "basic";
const MINI_THEME = "mini";
const MICRO_THEME = "micro";

export default class Pagination {
    constructor() {
        this.currentPage = 1;
        this.lastPage = 1;
        this.maxRows = 5;
        this.tableId = "";
        this.allRows = "";
        this.totalRows = 0;
        this.theme = STANDARD_THEME;
        this.showFirstPageNum = false;
        this.showLastPageNum = false;
        this.firstBtn = {display: false, label: "First"};
        this.lastBtn = {display: false, label: "Last"};
        this.previousBtn = {display: true, label: "&laquo;"};
        this.nextBtn = {display: true, label: "&raquo;"};
        this.goToPageBtn = {display: false, label: "Go To Page"};
    }

    bindEvents() {
        $("#first-btn")
            .off("click")
            .on("click", () => {
                this.pageChanged(1);
            });

        $("#previous-btn")
            .off("click")
            .on("click", () => {
                this.pageChanged(this.currentPage - 1);
            });

        $("#next-btn")
            .off("click")
            .on("click", () => {
                this.pageChanged(this.currentPage + 1);
            });

        $("#last-btn")
            .off("click")
            .on("click", () => {
                this.pageChanged(this.lastPage);
            });

        $(".page-item a.numbered")
            .off("click")
            .on("click", (e) => {
                let pageNum = Number($(e.currentTarget).data("number"));
                this.pageChanged(pageNum);
            });

        $("#go-to-page-input")
            .off("change")
            .on("change", (e) => {
                let pageNum = Number($(e.currentTarget).val());
                if (pageNum > 0 && pageNum <= this.lastPage) {
                    this.pageChanged(pageNum);
                }
            });
    }

    firstBtnPageItem() {
        return (
            `<li class="page-item">` +
            `<a class="page-link" id="first-btn" aria-label="First">${this.firstBtn.label}</a>` +
            `</li>`
        );
    }

    previousBtnPageItem() {
        return (
            `<li class="page-item">` +
            `<a class="page-link" id="previous-btn" aria-label="Previous">` +
            `<span aria-hidden="true">${this.previousBtn.label}</span>` +
            `</a></li>`
        );
    }

    nextBtnPageItem() {
        return (
            `<li class="page-item">` +
            `<a class="page-link" id="next-btn" aria-label="Previous">` +
            `<span aria-hidden="true">${this.nextBtn.label}</span>` +
            `</a></li>`
        );
    }

    lastBtnPageItem() {
        return (
            `<li class="page-item">` +
            `<a class="page-link" id="last-btn" aria-label="Last">${this.lastBtn.label}</a>` +
            `</li>`
        );
    }

    pageItem(pageNum) {
        return (
            `<li class="page-item">` +
            `<a class="page-link numbered" data-number="${pageNum}">${pageNum}</a>` +
            `</li>`
        );
    }

    extraPageItem() {
        return (
            `<li class="page-item">` +
            `<a class="page-link disabled">...</a>` +
            `</li>`
        );
    }

    goToPageInput() {
        return (
            `<li class="page-item" id="go-to-page">` +
            `<span id="go-to-page-label">${this.goToPageBtn.label} :</span>` +
            `<input id="go-to-page-input" type="text" value="">` +
            `</li>`
        );
    }

    basicPageItem(pageNum) {
        if (this.theme === BASIC_THEME) {
            return (
                `<li class="page-item">` +
                `<a class="page-link" data-number="">${pageNum} of ${this.lastPage}</a>` +
                `</li>`
            );
        } else if (this.theme === MICRO_THEME) {
            return (
                `<li class="page-item">` +
                `<a class="page-link" data-number="">${pageNum}</a>` +
                `</li>`
            );
        } else if (this.theme === MINI_THEME) {
            return "";
        }
    }

    createBasicPagination() {
        let html = "";
        html += this.previousBtnPageItem();
        html += this.basicPageItem(this.currentPage);
        html += this.nextBtnPageItem();
        return html;
    }

    createStandardPagination() {
        let html = "";
        if (this.firstBtn.display) {
            html += this.firstBtnPageItem();
        }
        if (this.previousBtn.display) {
            html += this.previousBtnPageItem();
        }

        html += this.createPageItems();

        if (this.nextBtn.display) {
            html += this.nextBtnPageItem();
        }
        if (this.lastBtn.display) {
            html += this.lastBtnPageItem();
        }

        return html;
    }

    createPagination() {
        let pagination = $(`#${this.tableId} .pagination`);
        let html = "";
        this.lastPage = Math.ceil(this.totalRows / this.maxRows);

        if (this.totalRows > this.maxRows) {
            if (this.theme === STANDARD_THEME) {
                html += this.createStandardPagination();
            } else {
                html += this.createBasicPagination();
            }

            if (this.goToPageBtn.display) {
                html += this.goToPageInput();
            }
            pagination.html(html).show();
            this.bindEvents();
        } else {
            pagination.hide();
        }
    }

    createPageItems() {
        let html = "";

        // First 5 page items
        if (this.currentPage <= 5) {
            for (let i = 1; i <= 5; i++) {
                html += this.pageItem(i);
            }

            if (this.lastPage > 5) {
                html += this.extraPageItem();
                if (this.showLastPageNum) {
                    html += this.pageItem(this.lastPage);
                }
            }

        // Middle 5 page items
        } else if (this.currentPage > 5 && this.currentPage < this.lastPage - 4) {
            if (this.showFirstPageNum) {
                html += this.pageItem(1);
            }

            html += this.extraPageItem();
            for (let i = this.currentPage - 2; i <= this.currentPage + 2; i++) {
                html += this.pageItem(i);
            }

            html += this.extraPageItem();
            if (this.showLastPageNum) {
                html += this.pageItem(this.lastPage);
            }

        // Last 5 page items
        } else if (this.currentPage >= this.lastPage - 4) {
            if (this.showFirstPageNum) {
                html += this.pageItem(1);
            }

            html += this.extraPageItem();
            for (let i = this.lastPage - 4; i <= this.lastPage; i++) {
                html += this.pageItem(i);
            }
        }

        return html;
    }

    pageChanged(pageNum) {
        $(".pagination .page-item a[data-number=" + this.currentPage + "]").removeClass("active");

        this.currentPage = pageNum;
        this.createPagination(this.tableId);

        $(".pagination .page-item a[data-number=" + pageNum + "]").addClass("active");

        if (this.currentPage === 1) {
            $(".pagination #previous-btn").addClass("disabled");
            $(".pagination #first-btn").addClass("disabled");
        } else {
            $(".pagination #previous-btn").removeClass("disabled");
            $(".pagination #first-btn").removeClass("disabled");
        }

        if (this.currentPage === this.lastPage) {
            $(".pagination #next-btn").addClass("disabled");
            $(".pagination #last-btn").addClass("disabled");
        } else {
            $(".pagination #next-btn").removeClass("disabled");
            $(".pagination #last-btn").removeClass("disabled");
        }

        this.showItems();
    }

    showItems() {
        let row = 0;
        this.allRows.each((i, element) => {
            row++;
            if (row > this.maxRows * this.currentPage ||
                row <= this.maxRows * this.currentPage - this.maxRows
            ) {
                $(element).hide();
            } else {
                $(element).show();
            }
        });
    }

    setInitialData(data) {
        this.currentPage = 1;
        this.tableId = data.tableId;
        this.allRows = $(`#${data.tableId} .${data.rowClass}`);
        this.totalRows = this.allRows.length;
        this.maxRows = typeof data.maxRows !== "undefined" ? data.maxRows : this.maxRows;

        if (typeof data.theme !== "undefined" &&
            $.inArray(data.theme, [
                STANDARD_THEME,
                BASIC_THEME,
                MICRO_THEME,
                MINI_THEME,
            ]) !== -1
        ) {
            this.theme = data.theme;
        }

        if (typeof data.firstBtn !== "undefined") {
            this.firstBtn = {
                display:
                    typeof data.firstBtn.display !== "undefined"
                        ? data.firstBtn.display
                        : this.firstBtn.display,
                label:
                    typeof data.firstBtn.label !== "undefined"
                        ? data.firstBtn.label
                        : this.firstBtn.label,
            };
        }
        if (typeof data.previousBtn !== "undefined") {
            this.previousBtn = {
                display:
                    typeof data.previousBtn.display !== "undefined"
                        ? data.previousBtn.display
                        : this.previousBtn.display,
                label:
                    typeof data.previousBtn.label !== "undefined"
                        ? data.previousBtn.label
                        : this.previousBtn.label,
            };
        }
        if (typeof data.nextBtn !== "undefined") {
            this.nextBtn = {
                display:
                    typeof data.nextBtn.display !== "undefined"
                        ? data.nextBtn.display
                        : this.nextBtn.display,
                label:
                    typeof data.nextBtn.label !== "undefined"
                        ? data.nextBtn.label
                        : this.nextBtn.label,
            };
        }
        if (typeof data.lastBtn !== "undefined") {
            this.lastBtn = {
                display:
                    typeof data.lastBtn.display !== "undefined"
                        ? data.lastBtn.display
                        : this.lastBtn.display,
                label:
                    typeof data.lastBtn.label !== "undefined"
                        ? data.lastBtn.label
                        : this.lastBtn.label,
            };
        }

        if (typeof data.goToPageBtn !== "undefined") {
            this.goToPageBtn = {
                display:
                    typeof data.goToPageBtn.display !== "undefined"
                        ? data.goToPageBtn.display
                        : this.goToPageBtn.display,
                label:
                    typeof data.goToPageBtn.label !== "undefined"
                        ? data.goToPageBtn.label
                        : this.goToPageBtn.label,
            };
        }
    }

    getPagination(data) {
        this.setInitialData(data);
        this.pageChanged(this.currentPage);
    }
}
