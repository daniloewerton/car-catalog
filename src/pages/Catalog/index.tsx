import Card from 'components/Card';
import SearchBox from 'components/SearchBox';

const Catalog = () => {
  return (
    <>
      <SearchBox />
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <Card />
          </div>

          <div className="col-sm-6 col-lg-4">
            <Card />
          </div>

          <div className="col-sm-6 col-lg-4">
            <Card />
          </div>

          <div className="col-sm-6 col-lg-4">
            <Card />
          </div>

          <div className="col-sm-6 col-lg-4">
            <Card />
          </div>

          <div className="col-sm-6 col-lg-4">
            <Card />
          </div>

          <div className="col-sm-6 col-lg-4">
            <Card />
          </div>

          <div className="col-sm-6 col-lg-4">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
