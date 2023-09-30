const element = (
  // Write your code here.
  <div className="congrats-card-container">
    <h1 className="heading">Congratulations</h1>
    <div className="person-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="person-img"
      />
      <h1 className="name">Kiran v</h1>
      <p className="college-des">
        Vishnu Institute of Computer Education and Technology Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="gift-img"
      />
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
