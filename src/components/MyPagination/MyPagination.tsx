import Pagination, { PaginationProps } from "@mui/material/Pagination";

// Utilizando Omit para criar um novo tipo baseado em MyPaginationProps, omitindo 'currentPage' e 'onPageChange'
type MyPaginationProps = Omit<PaginationProps, "shape" | "color">;

const MyPagination = (props: MyPaginationProps) => {
  return <Pagination {...props} shape="rounded" color="primary" />;
};

export default MyPagination;
