import React from "react";
import {connect} from "react-redux";

import '../styles/components/home.css';
import {getData} from "../../actions";
import HomeComponent from "../components/HomeComponent";


const mapStateToProps = state => ({
    data: state.data,
    error: state.error,
    loading: state.loading
});

const mapDispatchToProps = {
    getData
};

const ROOT_URL_TOMAPI = "https://localhost:5000/api/";

const style = {
    border:"solid blue 2px",
    color: "red"
};

function Home({getData, loading, data, error}) {
    React.useEffect(()=>{
        getData(`${ROOT_URL_TOMAPI}/stuff`);
    },[])
    
    return(
        <div style={style}>
            <h1>Page d'accueil</h1>
            {loading && <p>Page d'accueil...</p>}
            {data && <HomeComponent gameModules={data} />}
            {error && <p>Erreur de chargement de la page d'accueil !</p>}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
