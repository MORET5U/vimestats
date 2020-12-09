import Link from "next/link";
import React, { FunctionComponent, useCallback, useEffect } from "react";

import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import { IModifiedUser } from "../../../interfaces";

type Props = {
  friends: IModifiedUser[] | null;
  user: IModifiedUser;
};

type IRows = {
  element: React.ReactElement;
  id: number;
};

const columns = [{ id: 0, label: "Друзья", minWidth: 50 }];

function createData(element: React.ReactElement, id: number) {
  return { element, id };
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: "auto",
  },
});

const Friends: FunctionComponent<Props> = ({ friends, user }) => {
  let rows: IRows[] = [];

  if (friends) friends = friends.sort((a, b) => a.username.toLowerCase().localeCompare(b.username.toLowerCase()));

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const resetPages = useCallback(() => {
    setPage((_) => 0);
  }, [setPage]);

  useEffect(() => {
    resetPages();
  }, [user?.username]);

  const handleChangePage = (_: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (!friends)
    return (
      <Paper variant="outlined">
        <Typography variant="h5" align="center" style={{ paddingTop: "2%", paddingBottom: "2%" }}>
          <span role="img" aria-label="sweat emoji">
            😰
          </span>{" "}
          У {user!.username} нет друзей...
        </Typography>
      </Paper>
    );

  friends!.forEach((friend) => {
    rows = [
      ...rows,
      createData(
        <Link href="/player/[name]" as={"/player/" + friend.username} prefetch={false}>
          <a className="minecraftFont friendName" style={{ color: friend["rankColor"], cursor: "pointer" }}>
            {friend.username}
          </a>
        </Link>,
        friend.id
      ),
    ];
    return null;
  });

  return (
    <Paper className={classes.root} variant="outlined">
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                  <span style={{ fontSize: "1rem" }}>{column.label}</span>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody className="friends-table">
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row.element;

                    return <TableCell key={column.id}>{value}</TableCell>;
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        labelRowsPerPage=""
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "пред. страница",
        }}
        nextIconButtonProps={{
          "aria-label": "след. страница",
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelDisplayedRows={({ from, to, count }) => {
          return "" + from + "-" + to + " из " + count;
        }}
      />
    </Paper>
  );
};

export default Friends;
