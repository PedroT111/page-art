import React from 'react';
import { Stack, Box } from '@mui/material';
import { Masonry } from '@mui/lab';

const ImgList = ({itemData}) => {
    return(
        <Box className="box-masonry">
        <Masonry  className= "masonry-img p-0 m-0" columns={{xs:1, sm:3}} spacing={{xs:1}}>
            {itemData.map((item) => (
                <Stack key={item.img}>
                <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    className="img-obras"
                />
                </Stack>
            ))}
        </Masonry>
        </Box>
    );
}

export default ImgList;