function qsort(a) {
    if (a.length === 0) {return []};

    var left = [];
    var right = [];
    var pivot = a[0];

    for (var i = 1; i < a.length; i++) {
        if (a[i] < pivot) {
            left.push(a[i]);
        } else {
            right.push(a[i]);
        }
    }

    return qsort(left).concat(pivot, qsort(right));
}

function mergesort(a) {
    if (a.length < 2) {
        return a;
    }
    var left = a.slice(0, Math.ceil(a.length/2));
    var right = a.slice(Math.ceil(a.length/2));

    return merge(mergesort(left), mergesort(right));
}

function merge(l, r) {
    var sorted = [];
    var il = 0;
    var ir = 0;

    while (il < l.length && ir < r.length) {
        if (l[il] < r[ir]) {
            sorted.push(l[il]);
            il++;
        } else {
            sorted.push(r[ir]);
            ir++;
        }
    }

    return sorted.concat(l.slice(il), r.slice(ir));
}