import { Link } from "react-router-dom";
import "../styles.css";
import { BsFillSuitHeartFill, BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
const Topnav = ({ appliedFilters, setAppliedFilters }) => {
  const { wishlistState } = useWishlist();
  const { wishlist } = wishlistState;
  return (
    <div className="nav-container">
      <div>
        <h2>E-Statery</h2>
      </div>

      <div className="search-bar">
        <input
          type="search"
          placeholder="Search your products...."
          onChange={(e) =>
            setAppliedFilters({ ...appliedFilters, search: e.target.value })
          }
        />
        <BsSearch />
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
