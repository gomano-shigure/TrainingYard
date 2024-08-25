import {
  Autocomplete,
  Box,
  Button,
  List,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { smallIconSx } from "./styles/icon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { menuList, searchList } from "../router";

export function DrawerMenu() {
  const [searchTarget, setSearchTarget] = useState<string | null>(null);
  const MenuDom = menuList
    .filter((value) => value.title === searchTarget || searchTarget === null)
    .map((value, index) => {
      return (
        <Link to={value.link} key={value.title + "_" + index.toString()}>
          <DrawerListButton text={value.title} onClick={() => {}} />
        </Link>
      );
    });
  return (
    <List key="origin">
      <div>
        <SearchBox setSearchTarget={setSearchTarget} />
        {MenuDom}
      </div>
    </List>
  );
}
interface SearchBoxProps {
  setSearchTarget: React.Dispatch<string | null>;
}
function SearchBox(props: SearchBoxProps) {
  return (
    <Box sx={{ mx: 1, mb: 4 }}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={searchList}
        onChange={(event: any, newValue: string | null) => {
          props.setSearchTarget(newValue);
        }}
        sx={{ width: "100%" }}
        renderInput={(params) => (
          <TextField
            sx={{ height: "36px" }}
            {...params}
            label="search"
            variant="standard"
          />
        )}
      />
    </Box>
  );
}

export const buttonSx: SxProps = {
  color: "black",
  textAlign: "left",
  textTransform: "none",
  width: "100%",
  paddingLeft: "16px",
  justifyContent: "flex-start",
};
interface DrawerListButtonProps {
  text: string;
  startIcon?: ReactNode;
  onClick: () => void;
  className?: string;
}
function DrawerListButton(props: DrawerListButtonProps) {
  return (
    <Box>
      <Button
        startIcon={props.startIcon ? props.startIcon : <></>}
        sx={buttonSx}
        className={props.className}
        onClick={props.onClick}
      >
        <Typography className="noWrap">{props.text}</Typography>
      </Button>
    </Box>
  );
}

interface AccordionMenuProps {
  children: ReactNode;
  summaryStartIcon: ReactNode;
  summaryText: string;
  defaultOpen: boolean;
  AccordionGroupKey: string;
}
const accordionCloseEvent = new Event("AccordionClose");
declare global {
  interface HTMLElementEventMap {
    AccordionClose: CustomEvent<string>;
  }
}

export function Accordion(props: AccordionMenuProps) {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const detailRef = useRef<HTMLDetailsElement | null>(null);
  const [AnimateOpen, setAnimateOpen] = useState(props.defaultOpen);
  const isOpen = useRef<boolean>(props.defaultOpen);
  useEffect(() => {
    if (detailRef.current) {
      detailRef.current.setAttribute(
        "accordiongroupkey",
        props.AccordionGroupKey
      );
      detailRef.current.addEventListener("AccordionClose", () => {
        setAnimateOpen(false);
      });
    }
  }, [props.AccordionGroupKey]);
  return (
    <div>
      <details
        ref={detailRef}
        onClick={(event) => {
          event.preventDefault();
          setAnimateOpen(!AnimateOpen);
        }}
        {...(isOpen.current ? { open: true, arrowopen: "true" } : null)}
      >
        <summary className="hoverDefaultAction">
          <span>
            <Button
              startIcon={props.summaryStartIcon}
              className="disablepointer"
              sx={buttonSx}
            >
              <Typography className="noWrap">{props.summaryText}</Typography>
            </Button>
            <KeyboardArrowDownIcon sx={smallIconSx} className="rotateIcon" />
          </span>
        </summary>
        <CSSTransition
          nodeRef={nodeRef}
          in={AnimateOpen}
          timeout={200}
          className={
            isOpen.current ? "accordion enter-done" : "accordion exit-done"
          }
          onEnter={() => {
            isOpen.current = true;
            detailRef.current?.setAttribute("open", "true");
            detailRef.current?.setAttribute("arrowopen", "true");
            const closeList = document.querySelectorAll(
              '[accordiongroupkey="' + props.AccordionGroupKey + '"]'
            );
            closeList.forEach((elem) => {
              if (elem !== detailRef.current) {
                elem.dispatchEvent(accordionCloseEvent);
              }
            });
          }}
          onExit={() => {
            detailRef.current?.removeAttribute("arrowopen");
          }}
          onExited={() => {
            detailRef.current?.removeAttribute("open");
            isOpen.current = false;
            return null;
          }}
        >
          <div
            ref={nodeRef}
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{ marginLeft: "16px", overflow: "hidden" }}
          >
            <div style={{ overflow: "hidden" }}>{props.children}</div>
          </div>
        </CSSTransition>
      </details>
    </div>
  );
}
