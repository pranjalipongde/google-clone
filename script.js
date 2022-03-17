const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q="+ input + "&sxsrf=APq-WBusqyrvqosmaS7sspE0ge9ctOegbA%3A1647481033076&ei=yZAyYrSoBK--3LUPsOWYyAg&ved=0ahUKEwj0sICOgcz2AhUvH7cAHbAyBokQ4dUDCA4&uact=5&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgAEEMyBwgAELEDEEMyCgguELEDENQCEEMyBwgAELEDEEMyBwgAELEDEEMyBAgAEEMyBAgAEEMyBwgAELEDEEMyBAgAEEM6BwgjELADECc6BwgAEEcQsAM6BwgAELADEEM6BQgAEIAEOg0IABCABBCHAhCxAxAUOggIABCABBCxAzoICAAQsQMQgwE6CwgAEIAEELEDEIMBOgcIIxDqAhAnOg0ILhDHARCjAhDqAhAnOgoILhDHARCjAhAnOgsIABCxAxCDARCRAjoFCAAQkQI6EQguEIAEELEDEIMBEMcBEKMCOgoILhDHARCjAhBDOggILhCxAxCDAToHCC4QsQMQQzoECC4QQzoMCC4QxwEQ0QMQChBDOgcIABDJAxBDSgQIQRgASgQIRhgAUP4EWLkhYOMoaAJwAXgEgAGhAYgBiAuSAQQwLjEwmAEAoAEBsAEKyAEKwAEB&sclient=gws-wiz";
}