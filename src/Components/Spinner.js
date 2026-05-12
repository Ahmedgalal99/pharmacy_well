import Spinner from "react-bootstrap/Spinner";

function SizesExample() {
  return (
    <>
      <div
        className="h-80 d-flex align-items-center justify-content-center "
        style={{ height: "80vh" }}
      >
        <Spinner
          animation="grow"
          size="xs"
          className="m-2"
          style={{ width: 10, height: 10 }}
        />

        <Spinner
          animation="grow"
          size="sm"
          className="m-2"
          style={{ width: 20, height: 20 }}
        />
        <Spinner
          animation="grow"
          size="md"
          className="m-2"
          style={{ width: 30, height: 30 }}
        />
        <Spinner
          animation="grow"
          size="lg"
          className="m-2"
          style={{ width: 40, height: 40 }}
        />
      </div>
    </>
  );
}

export default SizesExample;
