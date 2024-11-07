function Square({ value, handleClick }){

    return(
        <>
            <button  className="btn-square" onClick={handleClick}>{value}</button>
        </>
    );
}


export default Square;