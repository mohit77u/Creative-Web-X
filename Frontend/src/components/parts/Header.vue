<template>
  <section :class="{ header: scrollPosition < 600, sticky: scrollPosition > 600 }">
    <nav class="navbar navbar-expand-md">
      <div class="container">
        <div class="circle"></div>
        <router-link class="navbar-brand" to="/">Creative Web<img class="logo" src="/images/logo.png" alt="logo"></router-link>
        <a data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample">
          <button class="navbar-toggler" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="toggle-btn top-nav-toggle"></span>
            <span class="toggle-btn middle-nav-toggle"></span>
            <span class="toggle-btn bottom-nav-toggle"></span>
          </button>
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
              <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                  <i class="fas fa-chevron-down"></i>
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <router-link class="dropdown-item" to="/frontend-development"><span></span>Frontend Development</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/wordpress-development"><span></span>WordPress Development</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/graphics-designing"><span></span>Graphics Designing</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/cms-website-development"><span></span>CMS Website Development</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/app-development"><span></span>Mobile App Development</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/laravel-development"><span></span>Laravel Development</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/react-development"><span></span>React js Development</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/angular-development"><span></span>Angular js Development</router-link>
                  </li>
                   <li>
                    <router-link class="dropdown-item" to="/vue-development"><span></span>Vue js Development</router-link>
                  </li>
                </ul>
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
            </li> -->
            <li class="nav-item">
              <router-link class="nav-link" to="/blog">Blog</router-link>
            </li>
            <!-- <li class="nav-item" v-if="!loggedIn">
              <router-link class="nav-link" to="/register">Register</router-link>
            </li>
            <li class="nav-item" v-if="!loggedIn">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li> -->
            <li class="nav-item" v-if="loggedIn">
              <a class="nav-link" href="#" @click="Logout">Log Out</a>
            </li>
            <li class="nav-item">
              <router-link class="primarybtn" to="/contact">Get Started</router-link>
            </li>
          </ul>
        </div>

        <div class="offcanvas offcanvas-start" tabindex="1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                <router-link class="navbar-brand" to="/">Creative Web<img class="logo" src="/images/logo.png" alt="logo"></router-link>
            </h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav">
              <li class="nav-item" data-bs-dismiss="offcanvas" aria-label="Close">
                <router-link class="nav-link active" to="/">Home</router-link>
              </li>
                <li class="nav-item" data-bs-dismiss="offcanvas" aria-label="Close">
                <router-link class="nav-link" to="/about">About</router-link>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                    <i class="fas fa-chevron-down"></i>
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown" data-bs-dismiss="offcanvas" aria-label="Close">
                    <li>
                      <router-link class="dropdown-item" to="/frontend-development"><span></span>Frontend Development</router-link>
                    </li>
                    <li>
                      <router-link class="dropdown-item" to="/wordpress-development"><span></span>WordPress Development</router-link>
                    </li>
                    <li>
                      <router-link class="dropdown-item" to="/graphics-designing"><span></span>Graphics Designing</router-link>
                    </li>
                    <li>
                      <router-link class="dropdown-item" to="/cms-website-development"><span></span>CMS Website Development</router-link>
                    </li>
                    <li>
                      <router-link class="dropdown-item" to="/app-development"><span></span>Mobile App Development</router-link>
                    </li>
                    <li>
                      <router-link class="dropdown-item" to="/laravel-development"><span></span>Laravel Development</router-link>
                    </li>
                    <li>
                      <router-link class="dropdown-item" to="/react-development"><span></span>React js Development</router-link>
                    </li>
                    <li>
                      <router-link class="dropdown-item" to="/angular-development"><span></span>Angular js Development</router-link>
                    </li>
                    <li>
                      <router-link class="dropdown-item" to="/vue-development"><span></span>Vue js Development</router-link>
                    </li>
                  </ul>
              </li>
              <!-- <li class="nav-item">
                <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
              </li> -->
              <li class="nav-item" data-bs-dismiss="offcanvas" aria-label="Close">
                <router-link class="nav-link" to="/blog">Blog</router-link>
              </li>
              <!-- <li class="nav-item" v-if="!loggedIn" data-bs-dismiss="offcanvas" aria-label="Close">
                <router-link class="nav-link" to="/register">Register</router-link>
              </li>
              <li class="nav-item" v-if="!loggedIn" data-bs-dismiss="offcanvas" aria-label="Close">
                <router-link class="nav-link" to="/login">Login</router-link>
              </li> -->
              <li class="nav-item" v-if="loggedIn" data-bs-dismiss="offcanvas" aria-label="Close">
                <a class="nav-link" href="#" @click="Logout">Log Out</a>
              </li>
            </ul>
            <div class="social" data-bs-dismiss="offcanvas" aria-label="Close">
                <a href="https://www.facebook.com/imohiitsingh" target="blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://github.com/mohit77u" target="blank"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/mohit-singh-patel-2b6598189/" target="blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://www.instagram.com/_iammohit__/" target="blank"><i class="fab fa-instagram"></i></a>
            </div>
            <p class="text-center my-2">Creative Web X @2021 All Rights Reserved.</p>
            <div class="text-center my-2" data-bs-dismiss="offcanvas" aria-label="Close">
              <router-link class="navbar-brand offcanvabottomlogo" to="/">Creative Web<img class="logo" src="/images/logo.png" alt="logo"></router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>
<script>

export default {
  name: "Header",
  data() {
    return {
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    Logout() {
      this.$store.dispatch("Logout").then(() => {
        this.$router.push("/login");
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
};
</script>
