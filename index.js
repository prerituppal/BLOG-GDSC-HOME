document.getElementById("add").addEventListener("click", () => {
    window.location.href = "pages/blog-creation.html";
})

const blogs = document.getElementsByClassName("blog");

Array.from(blogs).forEach(blog => {
    blog.addEventListener("click", () => {
        window.location.href = "pages/viewpage.html";
    })
})