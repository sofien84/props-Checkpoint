import React from 'react'
import PropTypes from 'prop-types';
import './profile.css';


const Profile=(props)=> {
    console.log(props);
    
    return (
        <React.Fragment>
            <h1 style={{color:'red', fontWeight: '200', fontsize: '50px', fontFamily: "Arial", textAlign: 'center', backgroundColor: "lightblue", margin: 'auto',width: '50%',padding: '50px',border: '3px solid pink'}}> {props.titre}</h1>
            {props.data.map((item)=> 
                    <ul style={{color:'blue', fontWeight: '200', fontsize: '50px', fontFamily: "Arial", textAlign: 'center', background: 'rgba(0, 128, 0, 0.3)', margin: 'auto',width: '70%',padding: '200px',border: '8px solid pink'}} key={item.id}>
                        <li><span><b style={{color:'green', fontsize: '50px'}}>FullName: </b></span>{item.FullName}</li>
                        <li><span><b style={{color:'green', fontsize: '50px'}}>Bio: </b></span>{item.Bio}</li>
                        <li><span><b style={{color:'green', fontsize: '50px'}}>Profession: </b></span>{item.Profession}</li>
                    </ul>



            ) } 

            <button style={{color:'black', fontsize: '240px', fontFamily: "Arial", textAlign: 'center', background: 'pink', width: '20%',padding: '20px'}} onClick={props.handle}>ClickMe</button>

            {props.children}



        </React.Fragment>
    )
}
Profile.defaultProps={
    titre:'React Props checkpoint'
};

Profile.propTypes={
    titre: PropTypes.string.isRequired
};
export default Profile;