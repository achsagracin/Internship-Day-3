import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Name,Category,Director,Release_year,Poster)
 {
  return { Name,Category,Director,Release_year,Poster };
}

const rows = [
{
    Name:'Aavesham',
    Category:'Action',
    Director:'Jithu Madhavan',
    Release_year:2024,
    Poster:'https://i.pinimg.com/564x/fe/0b/55/fe0b5585d70a7bfb65a6f3e10dcc46d1.jpg'
},
{
    Name:'Abraham Ozler',
    Category:'Thriller',
    Director:'Midhun Manuvel Thomas',
    Release_year:2024,
    Poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ88u_8TqdYlsStpMiQJkpq-RkXuSSNci_ag&s'
},
{
    Name:'Kadha Parayumbol',
    Category:'Moral Drama',
    Director:'M Mohanan',
    Release_year:2007,
    Poster:'https://im.rediff.com/movies/2008/feb/06sree2.jpg'
}
];

export default function View() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Director</TableCell>
            <TableCell align="center">Release_year</TableCell>
            <TableCell align="center">Poster</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.Name}
              </TableCell>
              <TableCell align="center">{row.Category}</TableCell>
              <TableCell align="center">{row.Director}</TableCell>
              <TableCell align="center">{row.Release_year}</TableCell>
              <TableCell align="center"><img src={row.Poster} style={{width: '100px',height:'auto'}}/></TableCell>
              
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}