import {Link as RouterLink} from 'react-router-dom';
import { Google } from "@mui/icons-material"
import { Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';


export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear Cuenta'>
          
          <form>
          <Grid2 container>
          <Grid2 
            //size={{sm:12, md:12, lg:12}}
            size={12}
            sx={{mt:2}}
            > 
              <TextField 
              label="Nombre completo" 
              type="text" 
              placeholder="John Doe"
              fullWidth
              ></TextField>
              
              
            </Grid2>

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
              <Typography sx={{mr:1}}>¿ya tienes cuenta?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar</Link>
            </Grid2>
            
          </Grid2>
        </form>
    </AuthLayout>

  )
}
