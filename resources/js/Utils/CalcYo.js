export function CalcYo() {
    // date: 2005-02-24
    // calculcate years since birth

    var today = new Date();
    var birthDate = new Date(2005, 1, 24);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age
}