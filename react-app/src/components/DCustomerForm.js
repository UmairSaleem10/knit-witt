import { TextField, Grid} from "@material-ui/core";



const DCustomerForm = (props) => {
    return ( 
        <form autocomplete="off" noValidate>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                    name="Reg. No"
                    variant="outlined"
                    label="Reg. No"
                    
                    />
                    <TextField
                    name="Reg. No"
                    variant="outlined"
                    label="Reg. No"
                    />

                </Grid>
            </Grid>
           
        </form>
     );
}
 
export default DCustomerForm;