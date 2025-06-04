type Props = {
  status: undefined | "Loading" | "Success" | "Error";
};

const Status: React.FC<Props> = ({ status }) => {
  if (status === "Success") {
    return (
      <p className="text-primary col-span-2 text-center">
        Your responses are held in confidence.
        <br />
        We do not share or disclose information under any circumstance.
      </p>
    );
  } else if (status === "Loading") {
    return (
      <p className="text-primary col-span-2 text-center">
        Sending Please Wait ...!
      </p>
    );
  } else if (status === "Error") {
    return (
      <p className="col-span-2 text-center text-red-500">Something Wrong</p>
    );
  } else {
    return null;
  }
};

export default Status;
