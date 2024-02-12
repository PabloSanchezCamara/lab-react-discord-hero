import pnjDiscord from "../assets/personajes-discord.png";

function Body() {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    height: "400px"
  }

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    
  }

  const imgStyle ={
    alignItems: "end",
    justifyContent: "end",
    margin: "0px",
    padding: "0px",
  }

  return (
    <div style={divStyle}>
      <div style={contentStyle}> 
      <h1>IMAGINE A PLACE...</h1>
      <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
      <button>Donwload for Mac</button>
      <button>Open Discord in your browser</button>
      </div>
      <img src={pnjDiscord} width="400px" alt="menu-icon" style={imgStyle}/>
    </div>
  );
}

export default Body;