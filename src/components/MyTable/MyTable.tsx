import { MouseEvent, useMemo, useState } from "react";

import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import TableHead from "@mui/material/TableHead";
import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";

import MyPagination from "../MyPagination/MyPagination";

type IMyTableProps = {
  total: number;
  itemsPerPage?: number;
  data: { id: string | number } & Record<string, string | number>[];
};

const getColumnsKeys = (row: Record<string, string | number>) => {
  return Object.keys(row);
};

const getColumnsValues = (row: Record<string, string | number>) => {
  return Object.values(row);
};

const MyTable = ({ total, itemsPerPage = 10, data }: IMyTableProps) => {
  const [page, setPage] = useState(1); // Começando na pagina 1

  // Lidar com alteração de pagina
  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const visibleRows = data.slice(
    (page - 1) * itemsPerPage,
    itemsPerPage * page
  );

  // Obtendo os títulos das colunas
  const headCells = getColumnsKeys(data[0]);

  return (
    <TableContainer>
      <Table aria-labelledby="tableTitle" padding="normal">
        <TableHead>
          <TableRow>
            {headCells.map((key) => (
              <TableCell
                key={key}
                //align={headCell.numeric ? "right" : "left"}
                //sortDirection={orderBy === headCell.id ? order : false}
              >
                {/* <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={createSortHandler(headCell.id)}
                >
                  
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === "desc"
                        ? "ordenado descendentemente"
                        : "ordenado ascendentemente"}
                    </Box>
                  ) : null}
                </TableSortLabel> */}
                {key}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleRows.map((row) => {
            const values = getColumnsValues(row);
            return (
              <TableRow hover key={values[0]}>
                {values.map((value) => (
                  <TableCell>{value}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
        {/* {
            return (
              <TableRow hover key={row.name} >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            );
          } */}
      </Table>
      <Container
        component="footer"
        sx={{
          height: ({ spacing }) => spacing(80),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MyPagination
          count={total / itemsPerPage} // Total de dados
          page={page} // Pagina atual
          onChange={handleChangePage}
        />
      </Container>
    </TableContainer>
  );
};

export { MyTable };
