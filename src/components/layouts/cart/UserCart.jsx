import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  createTheme,
  styled,
  tableCellClasses,
} from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";

export default function UserCart() {

  const theme = createTheme({
    breakpoints: {
      values: {
        sm: 640,
        md: 768,
        lg: 1024,
      },
    },
  });
 

  const StyledTableCell = styled(TableCell)(({theme})=>({
   [ `&.${tableCellClasses.head}`]:{
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  [ `&.${tableCellClasses.body}`]:{
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  }
  }))

  return (

    <div className="sm:w-7/12 w-full ">
    <TableContainer component={Paper}>
    
      <Table aria-label="simple table">
    
          <TableHead  >
            
            <TableRow>
              <StyledTableCell theme={theme} >Product Name</StyledTableCell>
              <StyledTableCell theme={theme} align="right">Price</StyledTableCell>
              <StyledTableCell theme={theme} align="right">Qty</StyledTableCell>
              <StyledTableCell theme={theme} align="right">Sub Total</StyledTableCell>
            </TableRow>
          
          </TableHead>
       
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              <div>
                <div className="flex pb-3">
                  <div className="flex flex-shrink-0">
                    <img
                      className="w-24  rounded-lg"
                      src="/Frontend-Final-2/assets/images/bag1.png"
                    />
                  </div>
                  <div className="pl-2 md:flex ">
                    <div>
                      <h3 className="text-xs font-semibold">Coach</h3>
                      <p className="break-all  text-xs font-medium text-color-typeLowEmphasis">
                        leath.....
                      </p>
                      <button className="rounded text-xs text-color-typeLowEmphasis  bg-color-grey p-0.5">
                        Qty: 1
                      </button>
                      <div className="flex gap-[0.37rem] md:hidden">
                        <p className=" md:pr-[3.69rem] text-color-typeHighEmphasis text-sm font-semibold md:font-normal">
                          $54.69
                        </p>
                        <p className="leading-[1.3rem] text-color-typeLowEmphasis font-medium text-[0.625rem]">
                          $69.77
                        </p>
                        <p className=" text-color-error">20% OFF</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t md:border-hidden font-semibold border-color-lightText text-center">
                <button className="text-color-primary  md:border-b md:text-color-error md:border-color-error pt-[0.62rem] text-sm">
                  Remove
                </button>
              </div>
            </TableCell>
       
          <StyledTableCell theme={theme} align="right">$54.69</StyledTableCell>
            <StyledTableCell theme={theme} align="right">1</StyledTableCell>
            <StyledTableCell theme={theme} align="right">$54.69</StyledTableCell>

          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
