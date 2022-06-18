import Image from "../NARUTO.png";
import { Link } from "react-router-dom";

function FeatureProduct() {
  return (
    <div className="col">
      <Link to="/products/1" replace>
        <div className="card shadow-sm">
          <img
            className="card-img-top bg-dark cover"
            height="240"
            alt=""
            src={Image}
          />
          <div className="card-body">
            <h5 className="card-title text-center">一番賞《火影忍者 疾風傳》交織的火之意志</h5>
            <p className="card-text text-center text-muted">價格:$ 650</p>
            <div className="d-grid gap-2">
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FeatureProduct;
