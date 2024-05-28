import { Box, Container, Grid, styled, TextField } from '@mui/material';

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(5),
  background: '#646669',
  height: '60vh',
  width: '40vh',
  border: '2px solid black',
  flexGrow: 1,
}));

type ImagesMap = {
  [key: string]: string;
};

type WorkProps = {
  sources: string[] | undefined;
};

function Work({ sources }: WorkProps) {
  const imagesMap: ImagesMap = {
    'Oak Forest': 'forest-oak.png',
    Quarry: 'quarry.png',
  };

  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Locations"
        variant="outlined"
        style={{ marginBottom: '10px' }}
      />
      <StyledContainer>
        <Grid container>
          {sources?.map((elem: string, index: number) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              key={index}
              style={{
                backgroundImage: `url(/images/${imagesMap[elem]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'top',
                height: '100px',
                fontSize: '25px',
                border: '1px solid white',
              }}
            >
              {elem}
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </Box>
  );
}

export default Work;
