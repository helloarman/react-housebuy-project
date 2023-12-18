function Header({ title, breadcrumb }) {
  return (
    <div>
      <div className="container-fluid header bg-white p-0">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6 p-5 mt-lg-5">
            <h1 className="display-5 animated fadeIn mb-4">{title}</h1>
            <nav aria-label="breadcrumb animated fadeIn">
              <ol className="breadcrumb text-uppercase">
                {breadcrumb.map((item, index) => {
                  console.log(item);
                  return (
                    <li key={index} className="breadcrumb-item">
                      <a href={item.url}>{item.label}</a>
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
          <div className="col-md-6 animated fadeIn">
            <img
              className="img-fluid"
              src="./src/assets/img/header.jpg"
              alt="Image"
            />
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-primary mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ padding: 35 }}
      >
        <div className="container">
          <div className="row g-2">
            <div className="col-md-10">
              <div className="row g-2">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control border-0 py-3"
                    placeholder="Search Keyword"
                  />
                </div>
                <div className="col-md-4">
                  <select className="form-select border-0 py-3">
                    <option selected>Property Type</option>
                    <option value={1}>Property Type 1</option>
                    <option value={2}>Property Type 2</option>
                    <option value={3}>Property Type 3</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select className="form-select border-0 py-3">
                    <option selected>Location</option>
                    <option value={1}>Location 1</option>
                    <option value={2}>Location 2</option>
                    <option value={3}>Location 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-dark border-0 w-100 py-3">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
