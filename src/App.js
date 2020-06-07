import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import {getPhotosThunk} from "./redux/app-reducer";
import {Field, reduxForm} from "redux-form";
import {Gallery} from "./components/Gallery/Gallery";

let SearchPhotosForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <Field component="input" name="newSearchText" placeholder="Search photos..." className="input"/>
        <button>Search</button>
    </form>
}

SearchPhotosForm = reduxForm({
    form: 'searchPhotos'
})(SearchPhotosForm)

const App = ({photos, getPhotosThunk}) => {
    useEffect(() => {
        getPhotosThunk('wallpaper')
    }, [])

    const onSubmit = ({newSearchText}) => {
        getPhotosThunk(newSearchText)
    }

    return (
        <div className="container">
            <h1 className="title">Wallpapper photos</h1>
            <SearchPhotosForm onSubmit={onSubmit}/>
            <div className="gallery">
                {photos && <Gallery photos={photos}/>}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    photos: state.app.photos
})

export default connect(mapStateToProps, {getPhotosThunk})(App)
