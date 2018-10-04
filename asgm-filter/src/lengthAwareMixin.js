export const lengthAwareMixin = {
    computed: {
        lengthAware() {
            let secText = this.secondText;
            return secText + '(' + secText.length + ')';
        }
    }
};