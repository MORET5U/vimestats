import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ReplayRoundedIcon from "@material-ui/icons/ReplayRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

interface ISearchFieldProps {
  placeholder: string;
  label?: string;
  searchRef?: any;
  clickAction?: (e?: any) => void;
  inputAction?: (e?: any) => void;
  submitAction?: (e?: any) => void;
}

function CustomizedInputBase({
  placeholder = "",
  clickAction,
  inputAction,
  submitAction,
  searchRef,
}: ISearchFieldProps) {
  const classes = useStyles();

  const field = searchRef || React.createRef<HTMLInputElement>();
  const cleanField = (): void => {
    field.current!.value = "";
  };

  const resetButton = (e: React.MouseEvent): void => {
    clickAction!(e);
    cleanField();
  };

  return (
    <Paper
      component="form"
      className={classes.root}
      onSubmit={submitAction}
      variant="outlined"
    >
      <InputBase
        onInput={inputAction}
        className={classes.input}
        placeholder={placeholder}
        spellCheck="false"
        autoComplete="false"
        autoCorrect="false"
        inputRef={field}
      />

      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="Искать"
      >
        <SearchIcon />
      </IconButton>

      <Divider className={classes.divider} orientation="vertical" />

      <IconButton
        color="secondary"
        className={classes.iconButton}
        onClick={resetButton}
        aria-label="Сбросить"
      >
        <ReplayRoundedIcon />
      </IconButton>
    </Paper>
  );
}

export default memo(CustomizedInputBase);
