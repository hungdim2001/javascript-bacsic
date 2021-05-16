function votableCheck(isAuthenticated, role) {
    var result;

    if (isAuthenticated == true) {
        if (role == "member" || role == "admin") result = true;
        else result = false;
    } else result = false;
    return result;
}
console.log(run("email", false));