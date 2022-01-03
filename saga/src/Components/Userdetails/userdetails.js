import React ,{useEffect} from 'react'
import {Grid} from '@material-ui/core';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './userdetails.css';
import { connect,useDispatch,useSelector } from 'react-redux'
import { fetchUsersRequest,fetchUsersSuccess } from '../../actions';

const Userdetails = () => {
 
 const dispatch=useDispatch();
 const userInfo=useSelector((state) =>state.users.users)
 console.log("component usersdata",userInfo)
 const userData=userInfo.results

  useEffect(() =>{
       dispatch(fetchUsersRequest());
  },[]);

    return (
        <>
        <h1 className="heading" >Random User Generator</h1>
        <div className="card-holder" >
        <Grid className="container" container alignItems="stretch">
        {userData && userData.map((user,idx) => {
          return(
            <>
            <Grid item lg={4}  className="cards">
               <CardActionArea className="cardActions">
                 <CardMedia
                 />
                 <CardContent className="content">
                   <Typography gutterBottom variant="h3" component="div" color="black">
                    {user.name.first}
                   </Typography>
                   <Typography variant="h6" color="text.secondary">
                    from {user.location.city}
                   </Typography>
                 </CardContent>
               </CardActionArea>
           </Grid>
           </>
        )})
          }
       </Grid>
   </div>
  
 </>
    )

}
// const mapStateToProps = state => {
//   return {
//     userData: state.user
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getUsers: () => dispatch(getUsers())
//   }
// }

//export default connect(mapStateToProps,mapDispatchToProps)(Userdetails)

export default Userdetails