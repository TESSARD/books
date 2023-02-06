import React from 'react'

const SearchBooks = () => {
  return (
    <main role="main">
    <div className='jumbotron jumbotron-fluid'>
        <div className='container text-center'>
            <h1 className='display-4'>BOOKS</h1>
            <p>Indiquez le sujet du livre à rechercher Google API</p>
            <form className='form-inline justify-content-center' 
            /********   ********/
            
            >
                <div className='form-group'>
                    <input
                       
                        className='form-control'
                        type="text"
                        placeholder='Quoi rechercher'
                        required
                         />
                </div>

                <div className='form-group'>
                    <button 
                    className='btn btn-outline-secondary ml-3' type="">
                        Rechercher
                        </button>
                </div>

            </form>

        </div>

    </div>
    <div class='container ' style={{ minHeight: "200px" }}>
        <div className="accordion"  >
            <div className="card mb-2" >
                <div className="card-header">
                    
                </div>
                <div className="collapse" data-parent="accordion">
                    <div className="card-body">
                        {
                            // Image
                            // Auteur
                            // Description
                            // Btn plus d'infos
                            // Btn Enregistrer
                            
                        }
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
    </div>
    </main>
  )
}

export default SearchBooks