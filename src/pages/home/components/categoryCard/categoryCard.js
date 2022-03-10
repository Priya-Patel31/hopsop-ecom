const CategoryCard = () => {
  return (
    <div className="vertical-card-container">
    <div className="card-hover">
      <div className="vertical-image-container">
        <img
          className="vertical-image hover-image"
          src="https://cdn.shopify.com/s/files/1/0550/0465/9885/files/670-600-2_37330c6b-6e74-429d-88dc-b6d26231fd35.jpg?v=1615192841"
          alt="climbing rope"
        />
      </div>
      <span className="badge bg-primary badge-trending text-xs">
        Sale
      </span>
      <div className="flex-row justify-center">
        <p className="text-xs font-bold">CLIMBING ROPE</p>
      </div>
    </div>
  </div>
  )  
}
export default CategoryCard;