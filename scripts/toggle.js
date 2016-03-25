HTMLElement.prototype.toggle = function () {
    if (this.style.display == '') {
        this.style.display = 'none';
    } else {
        this.style.display = '';
    }
};