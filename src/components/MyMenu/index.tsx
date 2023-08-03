import { ReactNode } from "react";

import MenuList, { MenuListProps } from "@mui/material/MenuList";
import Popper, { PopperProps } from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import ClickAwayListener, {
  ClickAwayListenerProps,
} from "@mui/material/ClickAwayListener";

type IMyMenuProps = Required<Pick<PopperProps, "anchorEl" | "open">> &
  Pick<ClickAwayListenerProps, "onClickAway"> &
  Required<Pick<MenuListProps, "aria-labelledby" | "id">> & {
    children: ReactNode;
  };

const MyMenu = ({
  open,
  anchorEl,
  onClickAway,
  "aria-labelledby": ariaLabelledby,
  id,
  children,
}: IMyMenuProps) => {
  return (
    <Popper
      open={open}
      anchorEl={anchorEl} // Recebendo o elemento que é a ancora
      role={undefined}
      placement="bottom" // Escolhendo a origem
      transition
      disablePortal // Desativando o portal
      sx={{ zIndex: 9999 }} // Correção para evitar conflitos com tooltip
    >
      {(
        { TransitionProps, placement } // Função retornado como child pelo popper
      ) => (
        <Grow
          {...TransitionProps}
          // Alterando a animação dependendo da origem do menu
          style={{
            transformOrigin:
              placement === "bottom-start" ? "center top" : "center bottom",
          }}
        >
          <Paper sx={{ marginTop: 5 }}>
            <ClickAwayListener onClickAway={onClickAway}>
              <MenuList
                autoFocusItem={open}
                id={id}
                aria-labelledby={ariaLabelledby} // Id do elemento que descreve o menu
                onKeyDown={undefined}
              >
                {children}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export { MyMenu };
