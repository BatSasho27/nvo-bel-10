function goBack() {
    if (document.referrer && new URL(document.referrer).origin !== window.location.origin) {
        // Ако предишната страница е от друг сайт или е друга страница, се връщаме нормално
        window.history.back();
    } else {
        // Ако предишната "страница" е просто котва, пренасочваме към началната страница или друга желана страница
        window.location.href = "/Skeleton/BEL.html"; // Или друга основна страница
    }
}