import { Box, Button, Container, Grid, styled, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

import type { Location } from '../types/types';
import { getLocationReward } from '../helpers/getLocationReward';

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
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  locations: Location[] | undefined;
};

function Work({ seconds, setSeconds, locations }: WorkProps) {
  const [location, setLocation] = useState<Location | null>(null);

  const imagesMap: ImagesMap = {
    'Oak Forest': 'forest-oak.png',
    Quarry: 'quarry.png',
  };

  const handleGoToButtonClick = (elem: Location) => {
    console.log('going to...', elem);

    if (location !== null) {
      const reward = getLocationReward(location, seconds);
      console.log('Reward is', reward);
    }

    setLocation(elem);
  };

  const handleCancelButtonClick = () => {
    if (location !== null) {
      const reward = getLocationReward(location, seconds);
      console.log('Reward is', reward);
    }

    setLocation(null);
    setSeconds(0);
  };

  useEffect(() => {
    if (!location) {
      return;
    }
    const timerId = setInterval(() => {
      setSeconds((currentSeconds) => currentSeconds + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [location, setSeconds]);

  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Locations"
        variant="outlined"
        style={{ marginBottom: '10px' }}
      />
      <h2>
        Current Location: {location?.name ?? 'None'} | Time: {seconds}
      </h2>
      <StyledContainer>
        <Grid container>
          {locations?.map((elem: Location, index: number) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              key={index}
              style={{
                justifyContent: 'center',
                alignItems: 'top',
                height: '20vh',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid white',
              }}
            >
              <Box
                style={{
                  flex: '0 1 15%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'lightgray',
                }}
              >
                {elem.name}
              </Box>
              <Box
                style={{
                  flex: '0 1 70%',
                  backgroundImage: `url(/images/${imagesMap[elem.name]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <Box
                style={{
                  flex: '0 1 15%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {elem.name !== location?.name ? (
                  <Button
                    variant="text"
                    onClick={() => handleGoToButtonClick(elem)}
                    style={{ color: 'white' }}
                  >
                    Go to
                  </Button>
                ) : (
                  <Button
                    variant="text"
                    onClick={handleCancelButtonClick}
                    style={{ color: 'white' }}
                  >
                    Cancel
                  </Button>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </Box>
  );
}

export default Work;
