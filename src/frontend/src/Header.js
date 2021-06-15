import { useState } from 'react'
import axios from 'axios'


const API_URL="http://localhost:8081/add";

const Header = () => {

    const [nameIP, setnameIP] = useState('')
    const [captionIP, setcaptionIP] = useState('')
    const [urlIP, seturlIP] = useState('')
    
    const onSubmit = (e) =>{
        e.preventDefault()

        if(!nameIP || !captionIP || !urlIP) {
            alert('Please fill complete data')
            return
        }
        
        axios.post(API_URL,{
            vegetable_name: nameIP,
            vegetable_quantity:captionIP,
            vegetable_cost:urlIP
        })
        .then(function(response){
            console.log(response)
        })
        .catch(function(error) {
            console.log("")
        })
        setnameIP('')
        setcaptionIP('')
        seturlIP('')
    }

    return (
        //getting input from user
        //3 data inputs:{name.url,caption}
        <form className='add-forms'>
            <div className='form-controls'>
                <label>Vegetable Name</label>
                <input type='text' 
                    value={nameIP}
                    onChange={(e)=>setnameIP(e.target.value)}
                    style={{borderRadius:5}}
                />
            </div>
            <div className='form-controls'>
                <label>Quantity:</label>
                <input type='text' 
                    value={captionIP}
                    onChange={(e)=>setcaptionIP(e.target.value)}
                    style={{borderRadius:5}}
                />
            </div>
            <div className='form-controls'>
                <label>Cost:</label>
                <input type='text' 
                    value={urlIP}
                    onChange={(e)=>seturlIP(e.target.value)}
                    style={{borderRadius:5}}
                />
            </div>
            <input type='submit' value='Add' className='button button-block' onClick={onSubmit} />
        </form>
    )
}

export default Header