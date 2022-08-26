import { Link } from "react-router-dom";
import "../styles.css";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
const Topnav = () => {
  const { wishlistState } = useWishlist();
  const { wishlist } = wishlistState;
  return (
    <div className="nav-container">
      <div>
        <h2>E-Statery</h2>
      </div>

      <div className="icon-container">
        <Link class="topnav-link" to="/wishlist">
          <h3>
            <span>Wishlist</span> <BsFillSuitHeartFill />
            <span class="cart-badge">{wishlist?.length}</span>
          </h3>
        </Link>

        <Link class="topnav-link" to="/wishlist">
          <h3>
            <FaUserAlt />
          </h3>
        </Link>
      </div>
    </div>
  );
};
export { Topnav };
