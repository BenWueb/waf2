import Image from "next/image";

const Spinner = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        right: "50%",
        transform: "translate(50%, -50%)",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100px",
          width: "100px",
          margin: "0 auto",
        }}
      >
        <Image src="/images/loading.svg" fill={true} />
      </div>
    </div>
  );
};

export default Spinner;
