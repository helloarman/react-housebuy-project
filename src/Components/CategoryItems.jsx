const CategoryItems = ({ data }) => {
  console.log(data);
  return (
    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
      <a className="cat-item d-block bg-light text-center rounded p-3" href>
        <div className="rounded p-4">
          <div className="icon mb-3">
            <img
              className="img-fluid"
              src="./src/assets/img/icon-apartment.png"
              alt="Icon"
            />
          </div>
          <h6>{data.name}</h6>
          <span>{data.count} Properties</span>
        </div>
      </a>
    </div>
  );
};

export default CategoryItems;
