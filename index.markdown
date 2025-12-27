---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Home
---

<!-- ================= BANNER / HERO ================= -->
<section class="bg-dark text-light text-center py-5">
  <div class="container">
    <h1 class="display-5 fw-bold text-white">Welcome to My <span class="">Blog</span></h1>
    <p class="lead mt-3">Technology • Cybersecurity • Programming</p>
    <a href="#blogs" class="btn btn-outline-light mt-3">Explore Blogs</a>
  </div>
</section>

<!-- ================= BLOGS ================= -->
<section id="blogs" class="py-5">
  <div class="container">
    <h2 class="mb-4 text-center text-white">Featured Blogs</h2>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Blog Title 1</h5>
            <p class="card-text">Short description of the blog post.</p>
            <a href="#" class="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Blog Title 2</h5>
            <p class="card-text">Short description of the blog post.</p>
            <a href="#" class="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Blog Title 3</h5>
            <p class="card-text">Short description of the blog post.</p>
            <a href="#" class="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ================= LATEST BLOGS ================= -->
<section id="latest" class="bg-light py-5">
  <div class="container">
    <h2 class="mb-4 text-center">Latest Blogs</h2>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">🚀 Understanding XSS Attacks</li>
      <li class="list-group-item">🔐 Web Security Basics</li>
      <li class="list-group-item">💻 Laravel vs Spring Boot</li>
      <li class="list-group-item">📡 Networking Fundamentals</li>
    </ul>
  </div>
</section>

<!-- ================= CATEGORIES ================= -->
<section id="categories" class="py-5">
  <div class="container">
    <h2 class="mb-4 text-center">Categories</h2>
    <div class="d-flex flex-wrap justify-content-center gap-3">
      <span class="badge bg-dark p-3">Cybersecurity</span>
      <span class="badge bg-dark p-3">Programming</span>
      <span class="badge bg-dark p-3">Web Development</span>
      <span class="badge bg-dark p-3">Networking</span>
      <span class="badge bg-dark p-3">Linux</span>
    </div>
  </div>
</section>

<!-- ================= CONTACT ================= -->
<section id="contact" class="bg-dark text-light py-5">
  <div class="container">
    <h2 class="mb-4 text-center">Contact Me</h2>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form>
          <div class="mb-3">
            <label class="form-label">Your Email</label>
            <input type="email" class="form-control" placeholder="name@example.com">
          </div>
          <div class="mb-3">
            <label class="form-label">Message</label>
            <textarea class="form-control" rows="4" placeholder="Your message"></textarea>
          </div>
          <button type="submit" class="btn btn-outline-light w-100">Send</button>
        </form>
      </div>
    </div>
  </div>
</section>