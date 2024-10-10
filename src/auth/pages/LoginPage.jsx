import {Link as RouterLink} from 'react-router-dom';
import { Google } from "@mui/icons-material"
import { Button, Grid, Grid2, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';


export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
          
          <form>
          <Grid2 container>
            <Grid2 
            //size={{sm:12, md:12, lg:12}}
            size={12}
            sx={{mt:2}}
            > 
              <TextField 
              label="Correo" 
              type="email" 
              placeholder="correo@gmail.com"
              fullWidth
              ></TextField>
              
              
            </Grid2>

            <Grid2 
            //size={{sm:12, md:12, lg:12}}
            size={12}
            sx={{mt:2}}> 
            <TextField 
              label="Contraseña" 
              type="password" 
              placeholder="Contraseña"
              fullWidth
              ></TextField>
            </Grid2>

            <Grid2 container size={12} spacing={2} sx={{mb:2, mt:1}}>
              <Grid2 size={{ xs: 12, sm:6}}> 
                <Button variant='contained' fullWidth>
                  Login
                </Button>
                
              </Grid2>

              <Grid2 size={{ xs: 12, sm:6}}> 
                <Button variant='contained' fullWidth>
                  <Google></Google>
                  <Typography sx={{ml:1}}>Google</Typography>
                </Button>
              </Grid2>
            </Grid2>

            <Grid2 container direction='row' justifyContent='end' size={12}>
              <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta</Link>
            </Grid2>
            
          </Grid2>
        </form>
    </AuthLayout>

  )
}
