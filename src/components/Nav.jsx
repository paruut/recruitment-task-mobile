const Nav = () => {
  return (
    <div className="nav ">
      <div className="nav-items flex pt-8 px-5 justify-between items-center">
        <div className="nav-menu">
          <a href="#">
            <img src="/src/assets/images/menu-icon.svg" alt="menu icon" />
          </a>
        </div>
        <div className="nav-icons flex gap-3 z-10 items-center">
          <a href="#">
            <img src="/src/assets/images/save-red-icon.svg" alt="save red icon" />
          </a>
          <a href="#">
            <img
              src="/src/assets/images/cart-black-icon.svg"
              alt="cart black icon"
            />
          </a>
          <a href="#">
            <img src="/src/assets/images/user-icon.svg" alt="user icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
