import Link from "next/link";
import { useRouter } from "next/router";
import { createRef, FC, FunctionComponent, memo, ReactElement, useContext, useState } from "react";

import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ExposureNeg1RoundedIcon from "@material-ui/icons/ExposureNeg1Rounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import MenuIcon from "@material-ui/icons/MenuRounded";
import SearchIcon from "@material-ui/icons/SearchRounded";
import SecurityRoundedIcon from "@material-ui/icons/SecurityRounded";

import { MySweetAlert } from "./MySweetAlert";
import ThemeCtx from "./Theme";
import { DiscordIcon } from "./CustomIcons";

type DrawerSide = "top" | "left" | "bottom" | "right";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "1.75rem",
  },
  list: {
    minWidth: 250,
  },
  fullList: {
    width: "auto",
  },
  drawerLinkItem: {
    color: "inherit",
    textDecoration: "none",
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200,
      },
    },
  },
}));

interface DrawerButtonP {
  text: string;
  icon: ReactElement;
  href: string;
}

const DrawerButton: FC<DrawerButtonP> = ({ icon, text, href }) => {
  const classes = useStyles();

  return (
    <List>
      <Link href={href}>
        <a className={classes.drawerLinkItem}>
          <ListItem button>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        </a>
      </Link>
    </List>
  );
};

const Navbar: FunctionComponent = () => {
  const router = useRouter();
  const classes = useStyles();

  const [playernameQuery, setQuery] = useState("");
  const [state, setState] = useState({ left: false, bottom: false });

  const inputRef = createRef<HTMLInputElement>();

  const { switchTheme, themeState } = useContext(ThemeCtx);

  const toggleDrawer = (side: DrawerSide, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = (side: DrawerSide) => (
    <div className={classes.list} role="presentation" onKeyDown={toggleDrawer(side, false)}>
      <DrawerButton href="/" text="Главная" icon={<HomeRoundedIcon />} />
      <DrawerButton href="/staff" text="Модераторы" icon={<SecurityRoundedIcon />} />
      <DrawerButton href="/demotions" text="Принятоснятия" icon={<ExposureNeg1RoundedIcon />} />

      <Divider />

      <DrawerButton href="https://go.defracted.net/discord" text="Discord" icon={<DiscordIcon />} />
      <DrawerButton href="https://github.com/cyber-snowflake/vimestats" text="Исходный код" icon={<GitHubIcon />} />

      <DrawerButton href="/donate" text="Пожертвовать" icon={<AttachMoneyIcon />} />

      <Divider />

      <List>
        <ListItem button onClick={switchTheme}>
          <ListItemIcon>
            <Switch size="small" checked={themeState.isDark ? true : false} color="primary" />
          </ListItemIcon>
          <ListItemText primary="Тёмная тема"></ListItemText>
        </ListItem>
      </List>
    </div>
  );

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value.trim());

  const handleQuery = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (playernameQuery.length < 2) {
      MySweetAlert.fire({
        title: "СЛИШКОМ КОРОТКИЙ ЗАПРОС",
        icon: "error",
      });

      return;
    }

    inputRef.current!.value = "";
    setQuery("");
    router.push("/player/[name]", `/player/${playernameQuery}`);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={2}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer("left", true)}>
            <MenuIcon />
          </IconButton>

          <Drawer open={state.left} onClose={toggleDrawer("left", false)} anchor="left">
            {sideList("left")}
          </Drawer>

          <Typography className={classes.title} variant="h6" noWrap>
            <Link href="/">
              <a className="navbar_title">
                <span className="navbar_title__vime">VIME</span>STATS
              </a>
            </Link>
          </Typography>

          <div>
            <form onSubmit={handleQuery} className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Введите ник"
                onChange={handleChanges}
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
                inputProps={{ "aria-label": "Поиск" }}
                inputRef={inputRef}
              />
            </form>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default memo(Navbar);
