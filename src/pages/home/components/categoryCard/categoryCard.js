import { Link } from "react-router-dom";
const CategoryCard = ({imageUrl,title}) => {
  return (
    <Link to="/products" className="vertical-card-container">
    <div className="card-hover">
      <div className="vertical-image-container">
        <img
          className="vertical-image hover-image"
          src={imageUrl}
          alt={title}
        />
      </div>
      <span className="badge bg-primary badge-trending text-xs">
        Sale
      </span>
      <div className="flex-row justify-center">
        <p className="text-xs font-bold">{title}</p>
      </div>
    </div>
  </Link>
  )  
}
export default CategoryCard;