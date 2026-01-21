import React from "react";
import yeswanth from "./charizard.jpg"; 
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          padding: "20px",
          backgroundColor: "rgb(0, 0, 0)",
          color: "#ffffff",
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/07/32/62/44/360_F_732624429_KKm3HhxIoXjnDyP2HuRLeJWVOqtcuPe0.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Bubble effect */}
        <div className="bubbles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Your existing content */}
        <div style={{ height: "50px" }}>
          <h1 style={{ textAlign: "center" }}>Portfolio</h1>
        </div>
        <p style={{ textAlign: "center" }}>
          This is a sample portfolio page built with React.
        </p>

        {/* Side-by-side layout */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            marginTop: "40px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Image */}
          <img
            className="hover-image"
            src={yeswanth}
            alt="yeswanth"
            width={200}
            height={200}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid white",
            }}
          />

          {/* Paragraph */}
          <div
            className="mydetails"
            style={{
              maxWidth: "500px",
              textAlign: "left",
              padding: "10px",
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#ebe7e7",
              backgroundColor: "#000",
              border: "5px solid white",
            }}
          >
            <p>
              I'm Prabhav Sinha, a Computer Science student at KL-University
              with a passion for coding and design. I work with{" "}
              <strong>Java</strong> and <strong>React</strong>, blending
              pro blem-solving with creative UI development. From debugging
              algorithms to crafting responsive interfaces, I aim to make
              projects both <strong>functional and visually engaging</strong>.
              Outside of tech, I love hiking and exploring new ideas that
              inspire fresh perspectives in my work.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;