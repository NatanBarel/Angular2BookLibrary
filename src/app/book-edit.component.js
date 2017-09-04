"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
var BookEditComponent = (function (_super) {
    __extends(BookEditComponent, _super);
    function BookEditComponent(dialogService) {
        return _super.call(this, dialogService) || this;
    }
    BookEditComponent.prototype.confirm = function () {
        // we set dialog result as true on click on confirm button, 
        // then we can get dialog result from caller code 
        this.result = true;
        this.close();
    };
    return BookEditComponent;
}(ng2_bootstrap_modal_1.DialogComponent));
BookEditComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/templates/book-edit.component.html',
        selector: 'edit-book'
    }),
    __metadata("design:paramtypes", [ng2_bootstrap_modal_1.DialogService])
], BookEditComponent);
exports.BookEditComponent = BookEditComponent;
//# sourceMappingURL=book-edit.component.js.map