import React from 'react'


//HIDDEN BUTTON FOR DELETE
function DeleteHiddenButton() {
     
const isLoggedIn = true,
const isCreator = true, 
    return (
        <div>
           {isLoggedIn, isCreator && <a href="/HiddenButtons">Delete</a>} 
           {isLoggedIn, isCreator && <a href="/HiddenButtons">Update</a>}
        </div>
    )
};

// pour savoir si user = creator => checker l'API




export default HiddenButtons

