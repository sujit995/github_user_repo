import React from 'react'

const ShowUserRepo = ({ items, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <div className="row">
                {items.map((item) => {
                    return (
                        <div key={item.id} className="col-sm-12 col-md-5 mx-4 my-4">
                            <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                                <div className="card-body">
                                    <h5 className="card-title text-left h2 mb-4">{item.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted text-left">
                                        {item.description}
                                    </h6>
                                    <p className="card-text btn btn-primary mt-3">{item.language}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ShowUserRepo