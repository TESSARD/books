import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBooksMan, delAllBooks, delBook } from '../redux/actions/actionAddBooks';
import FlipMove from 'react-flip-move';


const AddBooks = () => {

    const initialState = {
        title: "",
        author: ""
    }

    const dispatch = useDispatch();
    const libraryData = useSelector(state => state.library)
    console.log(libraryData)

    const [newData, setNewData] = useState(initialState);
    // console.log(newData)






    const handleSubmit = e => {
        e.preventDefault()//En cliquant sur un bouton "Soumettre", l'empêcher de soumettre un formulaire donc la page ne pa réchargé 
        // console.log(newData)
        dispatch(addBooksMan(newData))
        //Vider le input
        setNewData(initialState)


    }

    const displayData = libraryData.length > 0 ?
    <FlipMove>{
        libraryData.map(data => {
            return (
                <li key={data.id} className="list-group-item list-group-item-light d-flex justify-content-between">
                    <span><strong>Titre : </strong>{data.title}</span>
                    <span><strong>Auteur : </strong>{data.author}</span>
                    <span className="btn btn-danger" onClick={()=>{
                    /********    BUTTON   ********/
                        dispatch(delBook(data.id))
                        
                        }}>X</span>
                </li>
            )
        })
    }
        </FlipMove>
        :
        <p className='text-center'>Aucune data à afficher</p>


    const deleteAllBooksBtn = libraryData.length > 0 &&
        <div className="d-flex justify-content-center">
            <button className="btn-danger btn mt-4 mb-5" onClick={()=>{
                    /********    BUTTON   ********/
                dispatch(delAllBooks())}}
                
                >
                Effacer tous les livres
            </button>

        </div>
    return (
        <main role="main">
            <div className='jumbotron jumbotron-fluid'>
                <div className='container text-center'>
                    <h1 className='display-4'>BOOKS</h1>
                    <p>Ajouter un livre à votre bibliothèque</p>
                    <form className='form-inline justify-content-center' 
                    /********   ********/
                    onSubmit={handleSubmit}
                    >
                        <div className='form-group'>
                            <input
                                value={newData.title}
                                className='form-control'
                                type="text"
                                placeholder='Titre'
                                required
                                onChange={e => setNewData({ ...newData, title: e.target.value })} />
                        </div>
                        <div className='form-group'>
                            <input
                                value={newData.author}
                                className='form-control ml-3'
                                type="text"
                                placeholder='Auteur'
                                required
                                onChange={e => setNewData({ ...newData, author: e.target.value })} />
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-outline-secondary ml-3' type="">Ajouter un livre</button>
                        </div>

                    </form>

                </div>

            </div>
            <div className='container ' style={{ minHeight: "200px" }}>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group">
                            {displayData}
                        </ul>
                        {deleteAllBooksBtn}

                    </div>

                </div>
            </div>
        </main>
    )
}

export default AddBooks