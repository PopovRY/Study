function removeExclamationMarks(s) {
    let regEx = /\!/g;
    return s.replace(regEx, '');
}
