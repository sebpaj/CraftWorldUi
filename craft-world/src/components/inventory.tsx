import { Box, Container, Grid, styled, TextField } from '@mui/material';
import useGetInitialInventoryData from '../hooks/useGetInventoryData';

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(1),
  background: '#646669',
  height: '60vh',
  width: '40vh',
  border: '2px solid black',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  border: '1px solid #20252b',
  background: '#838485',
  height: '4vh',
  position: 'relative',
  fontSize: '10px',
}));

function Inventory() {
  const initialInvetoryData = useGetInitialInventoryData(50)();
  return (
    <Container>
      <TextField
        id="outlined-basic"
        label="Inventory"
        variant="outlined"
        style={{ marginBottom: '10px' }}
      />
      <StyledContainer>
        <Grid container spacing={2}>
          {initialInvetoryData.map((index, element) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
              <StyledBox>{element ?? null}</StyledBox>
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </Container>
  );
}

export default Inventory;
