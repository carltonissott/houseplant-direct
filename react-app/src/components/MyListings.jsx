const MyListings = (props)=>{

return(
    <div className="my-listing-card">
        <img className="listing-image"src={props.img} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <h4>{props.price}</h4>
        <h4>{props.ending}</h4>
        <img src="https://img.icons8.com/material-two-tone/38/000000/delete-sign.png"/>

    </div>
)

}

export default MyListings