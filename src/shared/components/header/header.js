<nav class="nav-container">
        <div class="left-navbar">
          <div class="hamburger-icon">
            <i class="fas fa-bars"></i>
          </div>
          <div class="logo">
            <img
              src="https://cdn.shopify.com/s/files/1/0020/2496/4194/files/logo.png?v=1534487210"
              alt="logo"
            />
          </div>
          <ul class="navbar-links list-style-none">
            <li class="navbar-link-list-item">
              <a href="/">Home</a>
            </li>
            <li class="navbar-link-list-item">
              <a href="/products/products.html">Shop</a>
            </li>
          </ul>
        </div>

        <div class="search-bar-container">
          <button>
            <i class="fas fa-search text-xs"></i>
          </button>
          <input
            type="search"
            placeholder="Search"
            class="search-bar text-xs"
          />
        </div>

        <div class="right-navbar">
          <ul class="nav-icons list-style-none">
            <li>
              <button
                class="flex-col nav-icon-link dropdown"
              >
                <div class="dropbtn flex-col">
                  <span class="badge-icon">
                    <i class="fas fa-user text-xs icon-size"></i>
                  </span>
                  <span class="nav-list-link">User</span>
                </div>
                <div class="dropdown-content">
                  <a href="/authentication/signin/signin.html" class="text-xs"
                    >Login</a
                  >
                  <a href="/profile_page/profile_page.html" class="text-xs"
                    >Profile</a
                  >
                </div>
              </button>
            </li>
            <li>
              <a
                href="../wishlist/wishlist.html"
                class="flex-col nav-icon-link wishlist-button"
              >
                <span class="badge-icon">
                  <i class="fas fa-heart text-xs icon-size"></i>
                  <span class="badge-count">10</span>
                </span>
                <span class="nav-list-link">Wishlist</span>
              </a>
            </li>
            <li>
              <a href="../carts/carts.html" class="flex-col nav-icon-link">
                <span class="badge-icon">
                  <i class="fas fa-shopping-cart text-xs icon-size"></i>
                  <span class="badge-count">10</span>
                </span>
                <span class="nav-list-link">Cart</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      