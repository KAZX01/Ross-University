function openSidebar() {
    document.getElementById("mySidebar").style.right = "0";
}

function closeSidebar() {
    document.getElementById("mySidebar").style.right = "-250px";
}

document.getElementById("profileIcon").addEventListener("click", openSidebar);
document.getElementById("themeToggle").addEventListener("click", toggleMode);