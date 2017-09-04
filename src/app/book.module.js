"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var book_detail_component_1 = require("./book-detail.component");
var books_list_component_1 = require("./books-list.component");
var book_filter_pipe_1 = require("./book-filter.pipe");
var book_service_1 = require("./book.service");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var BookModule = (function () {
    function BookModule() {
    }
    return BookModule;
}());
BookModule = __decorate([
    core_1.NgModule({
        declarations: [
            books_list_component_1.BookListComponent,
            book_filter_pipe_1.BookFilterPipe,
            book_detail_component_1.BookDetailComponent
        ],
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            ng2_bs3_modal_1.Ng2Bs3ModalModule,
            router_1.RouterModule.forChild([
                { path: 'books', component: books_list_component_1.BookListComponent },
                { path: 'book/:id', component: book_detail_component_1.BookDetailComponent },
            ])
        ],
        providers: [
            book_service_1.BookService,
        ]
    })
], BookModule);
exports.BookModule = BookModule;
//# sourceMappingURL=book.module.js.map