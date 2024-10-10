import { LoginOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, Grid2, IconButton, Toolbar, Typography } from "@mui/material"


export const NavBar = ({drawerWidth}) => {
  return (
    <AppBar 
    position='fixed'
    sx={{
        width:{ sm: `calc(100% - ${ drawerWidth }px)`},
        ml: {sm: `${drawerWidth}px`}
    }}
    >

        <Toolbar>
            <IconButton
            color="inherit"
            edge='start'
            sx={{mr:2, display: {sm:'none'}}}
            >
                <MenuOutlined></MenuOutlined>
            </IconButton>

            <Grid2 size={12} container direction='row' justifyContent='space-between'>
                <Typography variant='h6' noWrap component='div'>JournalApp</Typography>
                <IconButton color="error">
                    <LoginOutlined></LoginOutlined>
                </IconButton>
            </Grid2>
        </Toolbar>
    </AppBar>
  )
}
