function past(h, m, s){
    let hour = h * 3600000;
    let min = m * 60000;
    let sec = s * 1000;
    return hour + min + sec
}
