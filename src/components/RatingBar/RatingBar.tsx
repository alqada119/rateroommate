import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


interface RatingBarProp{
    type:string
    rating: number
}

const RatingBar: React.FC<RatingBarProp> = (props) => {
    return (
        <div>
            <Typography component="legend" fontSize="12px">{props.type}</Typography>
            <Rating name="read-only" value={props.rating} readOnly size='large' /> 
        </div>
        
  );
}
 
export default RatingBar;