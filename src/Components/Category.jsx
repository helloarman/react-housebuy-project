import CategoryItems from "./CategoryItems";
import category from "../../dummy_json/category.json";

const Category = () => {
  const { categories } = category;
  console.log(categories);
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="mb-3">Property Types</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <div className="row g-4">
            {categories.map((item) => (
              <CategoryItems key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
