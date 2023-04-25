import * as React from "react";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { BiLogOutCircle } from "react-icons/bi";
import { LogoutUser } from "../../features/userSlice";
import { useDispatch } from "react-redux";

export default function PopoverPopupState() {
  let dispatch = useDispatch();
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          {/* <Button variant="contained" {...bindTrigger(popupState)}> */}
          <BiLogOutCircle
            style={{ fontSize: "35px", marginTop: "10px", cursor: "pointer" }}
            {...bindTrigger(popupState)}
          />
          {/* </Button> */}
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography
              sx={{ p: 2 }}
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(LogoutUser())}
            >
              Logout
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
