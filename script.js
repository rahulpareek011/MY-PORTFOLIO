let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.info a'); // FIXED: added '.' to select class

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(".info a[href*='" + id + "']").classList.add('active'); // FIXED
            });
        }
    });
};
