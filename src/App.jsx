import './App.css'
import Grid from '@mui/material/Grid';

const App = () => {

  return (
    <>
      
      <Grid container spacing={1}>
        <Grid item md={2}>
          <span className='hamburger-icon'></span>
          <h2>Blue Q Financial</h2>
          <h3>Profits and Losses</h3>
          <h4>Dashboard Owner</h4>
          <h5><span className='home-icon'></span> ButtonDashboard</h5>
          <h5><span className='question-icon'></span> Faq Page</h5>
        </Grid>
        
        <Grid container md={10}>
          <Grid item md={12}>
            <span className='light-mode-icon'></span>
            <h1>DASHBOARD</h1>
            <h4>Welcome to your dashboard</h4>
          </Grid>
          <Grid item md={2}>
            <span className='phone-icon'></span>
            <h2>18,924</h2>
            <h4>Sales Obtained</h4>
            <h4> 10%</h4>
          </Grid>
          <Grid item md={2}>
          <span className='phone-icon'></span>
            <h2>101,341</h2>
            <h4>Sale Losses</h4>
            <h4> -14%</h4>
          </Grid>
          <Grid item md={2}>
          <span className='phone-icon'></span>
            <h2>1,345</h2>
            <h4>Sales Obtained</h4>
            <h4> 59%</h4>
          </Grid>
          <Grid item md={8}>
            <h2>Revenue Generated</h2>
            <h3> 849,194,717 </h3>
          </Grid>
          <Grid item md={4}>
            <h3>Recent Transactions</h3>
            <hr/>
            <Grid>
              <h2>Shoes</h2>
              <span>James Holloway</span>
              <h4>2021-09-01</h4>
              <h3>$34.95</h3>  
            </Grid>
            <hr/>
            <Grid>
              <h2>Hoodie</h2>
              <span>Amanda Kent</span>
              <h4>2021-04-01</h4>
              <h3>$154.45</h3>
            </Grid>
            <hr/>
            <Grid>
              <h2>PC Moniter</h2>
              <span>Alex Baldlose</span>
              <h4>2021-02-01</h4>
              <h3>$430.95</h3>
            </Grid>
            
            <hr/>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default App