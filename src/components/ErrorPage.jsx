import { blue } from "@mui/material/colors"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function ErrorPage(){
    return(
        <div style={{textAlign: "center", margin: 100, fontSize: 40}}>
            <h1>404</h1>
            <p>Invalid URL</p>
            <ErrorOutlineIcon fontSize='large' color="error" sx={{m: 5}}/>
        </div>
    )
}

export default ErrorPage