import React, { useState } from 'react'

const AddBooks = () => {
    
     const initialState = {
        title: "",
        author: ""
     }
     
    
    
    const [newData, setNewData] = useState(initialState);
    // console.log(newData)
    
    
     const handleSubmit = e => {
        e.preventDefault()//En cliquant sur un bouton "Soumettre", l'empêcher de soumettre un formulaire donc la page ne pa réchargé 
        console.log(newData)

      
    }
    
    
  return (
    <main role="main">
        <div className='jumbotron jumbotron-fluid'>
            <div className='container text-center'>
                <h1 className='display-4'>BOOKS</h1>
                <p>Ajouter un livre à votre bibliothèque</p>
                <form className='form-inline justify-content-center' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input 
                            value={newData.title}
                            className='form-control' 
                            type="text" 
                            placeholder='Titre' 
                            required
                            onChange={e=>setNewData({...newData, title:e.target.value})}/>
                    </div>
                    <div className='form-group'>
                        <input 
                            value={newData.author}
                            className='form-control ml-3' 
                            type="text" 
                            placeholder='Auteur' 
                            required
                            onChange={e=>setNewData({...newData, author:e.target.value})}/>
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-outline-secondary ml-3' type="">Ajouter un livre</button>
                    </div>
                    
                </form>
                
            </div>
            
        </div>
        <div class='container ' style={{minHeight:"200px"}}>
            <div className="row">
                <div className="col-md-12">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-light d-flex justify-content-between">Livres enregistrés ici
</li>
                    </ul>
            <div className="d-flex justify-content-center">
                <button  className="btn-danger btn mt-4 mb-5">Effacer tous les livres</button>
                
            </div>
                    
                </div>
                
            </div>
        </div>
    </main>
  )
}

export default AddBooks