import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import './NavCard.css';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: '0 2% 0 2%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function NavCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
          <Typography inline align="left" variant="h5" component="h2">
            <Grid constainer style={{width: "100%"}}>
            <div style={{display: "inline"}}>
              <strong>Fab Hotel Prime Ivory Pearl II</strong>
              <font style={{marginLeft: "2%", fontSize: '60%', backgroundColor: '#E3E3E3', padding: '0.25%'}}>ID 1753</font>
            </div>
            <div style={{marginLeft: "auto", display: "inline"}}><CreateIcon /></div>
            </Grid>
          </Typography>
        <Typography className={classes.pos} color="textSecondary">
          PHOTOSHOOT
        </Typography>
        <Typography variant="body2" component="p">
          <Grid container justify="space-between" style={{padding: '1% 0 1% 0'}}>
            <div>
              <div><strong>Rs 5,500</strong></div>
              <div><font color="#A7A7A7">Billing Amount</font></div>
            </div>
            <div>
              <div><strong>Product Photoshoot</strong></div>
              <div><font color="#A7A7A7">Category</font></div>
            </div>
            <div>
              <div>
                <strong>Fab Budget</strong>
                <font style={{fontSize: '80%', backgroundColor: '#F8C245'}}><strong>GOLD</strong></font>
              </div>
              <div><font color="#A7A7A7">Product</font></div>
            </div>
            <div>
              <div><strong>02/01/2020, 12:30PM</strong></div>
              <div><font color="#A7A7A7">Shoot Date & Time</font></div>
            </div>
            <div>
              <div><strong>Kolkata</strong></div>
              <div><font color="#A7A7A7">Location</font></div>
            </div>
            <div>
              <div><strong><font color="textSecondary">Confirmed</font></strong></div>
              <div><font color="#A7A7A7">Status</font></div>
            </div>
            <div>
              <div><strong>--</strong></div>
              <div><font color="#A7A7A7">Approval Status</font></div>
            </div>
            <div>
              <div><strong>6<font color="#A7A7A7">/10</font></strong></div>
              <div><font color="#A7A7A7">Rating</font></div>
            </div>
          </Grid>
          <Grid container justify="space-between" style={{padding: '3% 0 1% 0'}}>
            <div style={{width: '25%'}}>
              <strong>POC Contact Details</strong>
              <hr />
              <div><strong>Satyajeet Chatterjee</strong></div>
              <div><font color="#A7A7A7"><strong>+91 8584-9682-44</strong></font></div>
              <br />
              <Button variant="contained" disabled>
                Reimbursement
              </Button>
            </div>
            <div className="NavcardBlocks">
              <p>Address</p>
              <p><strong>Karunamoyee, Saltlake, sector V, Kolkata-20, West Bengal</strong></p>
              <p><a href="#" style={{textDecoration: 'none'}}>View Google Map Location</a></p>
            </div>
            <div className="NavcardBlocks">
              <p><strong>All Photoshoot</strong></p>
              <p><a href="#" style={{textDecoration: 'none'}}>Click here to open folder</a></p>
            </div>
          </Grid>
          <Grid container style={{padding: '3% 0 0% 0'}}>
            <div style={{width: '100%'}}>
              <strong>Comments</strong>
              <hr />
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel libero at justo tempor aliquet ut nec magna. In at venenatis sapien, non semper elit. Quisque facilisis ipsum nunc, quis consectetur enim aliquam nec.
              </p>
              <br/>
              <hr />
            </div>
          </Grid>
          <Grid container alignItems="center" style={{paddingBottom: '0%', width: '100%'}} >
            <div>
              <Button size="small"><font color="#A7A7A7">View Less</font></Button>
            </div>
          </Grid>
        </Typography>
      </CardContent>
        
    </Card>
  );
}