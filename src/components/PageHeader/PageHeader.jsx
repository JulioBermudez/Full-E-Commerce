import { Link } from "react-router-dom"

const PageHeader = (prop) => {
  return (
    <div className="pageheader-section"> 
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="pageheader-content text-center">
                        <h2>{prop.title}</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{prop.currentPage}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageHeader