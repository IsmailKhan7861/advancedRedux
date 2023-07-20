import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiActons } from "../../store/ui";
const CartButton = (props) => {
  const checkData = useSelector((state) => state.ui.isVisible);
  const dispatch = useDispatch();
  console.log(checkData, "test");
  const bttnFunc = () => {
    dispatch(uiActons.toggle());
  };
  return (
    <button className={classes.button} onClick={bttnFunc}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
