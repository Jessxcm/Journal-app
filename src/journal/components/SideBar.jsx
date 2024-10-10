import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"


export const SideBar = ({ drawerWidth=240 }) => {
  return (
    <Box
    component='nav'
    sx={{width: {sm: drawerWidth}, flexShrink: {sm:0}}}
    >
        <Drawer
        variant="permanent" //temporary
        open= {true}
        sx={{
            display: {xs: 'block'},
            '& .MuiDrawer-paper':{boxSizing: 'border-box', width: drawerWidth}
        }}
        >

            <Toolbar>
                <Typography variant='h6' noWrap component={'div'}>
                    Jessica Cala
                </Typography>
            </Toolbar>
            <Divider></Divider>

            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text =>(
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot></TurnedInNot>
                                </ListItemIcon>

                                <Grid2 container>
                                    <ListItemText primary={text}></ListItemText>
                                    <ListItemText secondary={'Reprehenderit fugiat velit tempor ut mollit anim minim amet ea.'}></ListItemText>
                                </Grid2>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>
    </Box>
  )
}
