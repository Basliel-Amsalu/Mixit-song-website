import { useDispatch } from "react-redux";
import "./AddButton.styles.js";
import { useRef, useEffect } from "react";
import { setUpdate } from "../../../state/reducers";
import {
  AddButtonContainer,
  AddButtonIcon,
  AddButtonText,
} from "./AddButton.styles";

function AddButton(props) {
  const dispatch = useDispatch();

  let blur = useRef(null);

  useEffect(() => {
    const clickHandler = (e) => {
      dispatch(setUpdate(false));
      props?.handleBlur?.call(e);
    };

    const currentBlurRef = blur.current;
    currentBlurRef.addEventListener("click", clickHandler);

    return () => {
      currentBlurRef.removeEventListener("click", clickHandler);
    };
  }, [dispatch, props]);

  return (
    <AddButtonContainer className="section__add-btn btns toggler" ref={blur}>
      <AddButtonIcon className="section__add-btn--icon icon">
        <i class="fa fa-plus"></i>
      </AddButtonIcon>
      <AddButtonText className="section__add-btn--text">
        {props.text}
      </AddButtonText>
    </AddButtonContainer>
  );
}

export default AddButton;
