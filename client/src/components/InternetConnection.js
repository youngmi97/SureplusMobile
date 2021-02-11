import styled from "styled-components";

function InternetConnection() {
  return (
    <div className="InternetConnectionStyles">
      <MyStyled bgColor={"red"}>
        Internet connection lost. Reconnecting...
      </MyStyled>
    </div>
  );
}

const MyStyles = styled.div`
  width: 100vw;
  color: #ffffff;
  background-color: ${(props) => (props.bgColor ? "red" : "purple")};
`;

export default InternetConnection;
