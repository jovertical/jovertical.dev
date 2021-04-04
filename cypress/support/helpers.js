String.prototype.ucwords = function () {
    return this.split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
};

export const range = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
