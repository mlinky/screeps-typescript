global.setFunc = (function(A, B) {
    Object.keys(B).forEach(function(N) {
        Object.defineProperty(A, N, {
            method: (function(...args) { return (B[N](this, ...args)); }),
            enumerable: false,
            configurable: true
        });
    });
});
global.setProp = (function(A, B) {
    Object.keys(B).forEach(function(N) {
        if (typeof(A) === "object") {
            Object.defineProperty(A, N, {
                get: (function() { return (B[N](this)); }),
                enumerable: false,
                configurable: true
            });
        } else {
            Object.defineProperty(A.prototype, N, {
                get: (function() { return (B[N](this)); }),
                enumerable: false,
                configurable: true
            });
        }
    });
});
